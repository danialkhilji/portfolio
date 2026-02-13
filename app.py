from datetime import datetime
from flask import Flask, render_template, send_from_directory

app = Flask(__name__)


@app.context_processor
def inject_year():
    return {'current_year': datetime.now().year}


@app.route('/favicon.ico')
def favicon():
    return send_from_directory('static', 'favicon.ico')


@app.route('/')
def home():
    return render_template('home.html', active_page='home')

@app.route('/career')
def career():
    return render_template('career.html', active_page='career')

@app.route('/projects')
def projects():
    return render_template('projects.html', active_page='projects')

@app.route('/certificates')
def certificates():
    return render_template('certificates.html', active_page='certificates')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('error.html', error_code=404, error_message="Page Not Found"), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('error.html', error_code=500, error_message="Internal Server Error"), 500

if __name__ == '__main__':
    app.run(debug=True)
