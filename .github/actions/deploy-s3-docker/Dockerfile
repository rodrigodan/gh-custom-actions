# Creates an env where this deployment code will run
# it creates a container based on some python is installed. Python version 3
FROM python:3

COPY requirements.txt /requirements.txt

RUN pip install -r requirements.txt

COPY deployment.py /deployment.py

CMD ["python", "/deployment.py"]