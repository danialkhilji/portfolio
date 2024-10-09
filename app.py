from flask import Flask, render_template, send_from_directory, request

app = Flask(__name__)


@app.route('/favicon.ico')
def favicon():
    return send_from_directory('static', 'favicon.ico')


@app.route('/')
def home():
    return render_template('index.html', message="Enter your name", active_page='home')


@app.route('/greet', methods=['POST'])
def greet():
    name = request.form['name']
    greeting_msg = f'Hey {name}!'
    return render_template('index.html', message=greeting_msg, active_page='home')


@app.route('/about')
def about():
    return render_template('about.html', active_page='about')


if __name__ == '__main__':
    app.run(debug=True)
