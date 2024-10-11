from flask import Flask, render_template, send_from_directory, request

app = Flask(__name__)


@app.route('/favicon.ico')
def favicon():
    return send_from_directory('static', 'favicon.ico')


@app.route('/')
def home():
    return render_template('home.html', message="Enter your name", active_page='home')

@app.route('/career')
def career():
    return render_template('career.html', active_page='career')

@app.route('/projects')
def projects():
    return render_template('projects.html', active_page='projects')

@app.route('/certificates')
def certificates():
    return render_template('certificates.html', active_page='certificates')

if __name__ == '__main__':
    app.run(debug=True)
