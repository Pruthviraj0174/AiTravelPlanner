from flask import Flask, render_template, request
import google.generativeai as genai
from datetime import datetime
import os
import markdown

app = Flask(__name__)

# Configure Gemini API
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY', 'AIzaSyAIIG652vc0I553z6Es0BzneTZu8ic_Zno')
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-2.0-flash')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/weather')
def weather():
    return render_template('weather.html')

@app.route('/popular')
def popular():
    return render_template('popular.html')

@app.route('/explore')
def explore():
    return render_template('explore.html')

@app.route('/plan_trip', methods=['POST'])
def plan_trip():
    try:
        # Get form data
        current_location = request.form['current_location']
        destination = request.form['destination']
        start_date = request.form['start_date']
        end_date = request.form['end_date']
        budget = request.form['budget']
        travelers = request.form['travelers']
        interests = request.form.get('interests', '')

        # Calculate trip duration
        start = datetime.strptime(start_date, '%Y-%m-%d')
        end = datetime.strptime(end_date, '%Y-%m-%d')
        duration = (end - start).days + 1

        # Generate prompt for Gemini
        prompt = f"""Create a detailed travel itinerary for a trip from {current_location} to {destination}.
        Trip Duration: {duration} days ({start_date} to {end_date}).
        Budget: {budget} Rs for {travelers} travelers.
        Interests: {interests if interests else 'General sightseeing'}.

        Include:
        1. Daily schedule with time slots
        2. Recommended attractions/activities
        3. Suggested restaurants/cuisine
        4. Hotel recommendations with estimated prices
        5. Transportation options between locations
        6. Estimated costs for each day
        7. Any important tips or warnings

        Format the response in clear sections with headings. Include emojis where appropriate."""

        # Get response from Gemini
        response = model.generate_content(prompt)
        
        # Convert markdown to HTML
        itinerary_html = markdown.markdown(response.text)

        return render_template('results.html', 
                            itinerary=itinerary_html,
                            current_location=current_location,
                            destination=destination,
                            start_date=start_date,
                            end_date=end_date,
                            budget=budget,
                            travelers=travelers)

    except Exception as e:
        return render_template('results.html', error=str(e))

if __name__ == '__main__':
    app.run(debug=True)