export interface Project {
  title: string;
  description: string;
  contributors?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Digital Development Initiative",
    description:
      "This project aims to use World Bank data and analyse it. The objective is to find the 10 best countries that deserve the World Bank funding for digital development. The countries filtered are based on many different features such as their GDP, Internet Users, etc. The future predictions of each country's growth was also evaluated using Auto Regressive Integrated Moving Average (ARIMA) algorithm.",
    contributors: "Faizan Alvi",
    githubUrl:
      "https://github.com/danialkhilji/Digital-Development-Initiative-World-Bank",
  },
  {
    title: "Bank Marketing data analysis (EDA)",
    description:
      "This project explores the bank marketing dataset using automatic EDA packages in R. The objective is to figure out the frequency of customers using which type of accounts so that new bank offers are offered to the most loyal customers.",
    githubUrl: "https://github.com/danialkhilji/Bank-Marketing-EDA",
  },
  {
    title: "Human Activity data analysis (EDA)",
    description:
      "This project is a data analysis of human activity throughout the day using automatic EDA packages in R. The data was collected using the smartphone and smartwatch sensors. The results show useful insights into how a human body movement varies at times.",
    githubUrl: "https://github.com/danialkhilji/Human-Activity-EDA",
  },
  {
    title: "Letter Recognition using Machine Learning",
    description:
      "Code is written in Python for recognition of each letter separately. The project was carried out twice using different algorithms each time. XGBoost and KNN algorithms were used.",
    githubUrl: "https://github.com/danialkhilji/Letter-Recognition",
  },
  {
    title: "House Prices Analysis (EDA)",
    description:
      "This project aims to do an exploratory data analysis of house prices in America. Another aim of this project is to do the analysis in the shortest time therefore automatic EDA packages are used. The analysis figures out some trends of how prices vary throughout the year and which options in the house increase its value over time.",
    githubUrl: "https://github.com/danialkhilji/House-Prices-EDA",
  },
  {
    title: "Sentiment Analysis of Mall Customers",
    description:
      "It is an Exploratory Data Analysis (EDA) of mall customers dataset in order to do sentiment analysis. The original dataset was downloaded from Kaggle. The objective of this analysis is to use and explore the Automatic EDA packages in R and analyse dataset. It explores how customers' spending power varies according to their age and other variables.",
    githubUrl: "https://github.com/danialkhilji/Sentiment-EDA",
  },
  {
    title: "NETFLIX Movie Recommendation",
    description:
      "Used NETFLIX Competition dataset and cleaned for analysis. Then I used Collaborative Filtering and Pearson's R Correlation as two methods of recommendation to build a model. Evaluated performance at the end.",
    githubUrl: "https://github.com/danialkhilji/NETFLIX-Recommendation-Model",
  },
  {
    title: "Emotional AI: Facial Key-Points Detection",
    description:
      "Performed image visualization and augmentation. Then, normalized the data set. Built and trained a Deep Neural Network based on Convolutional Neural Network and Residual blocks. Used TensorFlow and Keras for building neural network.",
  },
  {
    title: "Deep Neural Network for scene classification",
    description:
      "Used TensorFlow neural network to classify scenes in the images in Python-3. For image data generation, Keras library was used. I created a CNN with five convolutional layers followed by a DNN with one hidden layer containing 512 neurons and output layer containing 15 neurons (each for one category). All neurons use RELU as an activation function. Iterations were stopped when 0.7 accuracy is reached.",
    githubUrl:
      "https://github.com/danialkhilji/Scene-Recognition-Convolutional-Neural-Network",
  },
  {
    title: "Micro-Inverter with Lithium Ion battery",
    description:
      "It was a final year project of my bachelor's program. The aim of the project was to design and implement a single phase small sized inverter with fine sinusoidal A.C output of 220V and 150W using 12V Lithium Ion batteries. It is a load optimized inverter for the supply of IT equipment. The primary part of the project includes charging of the lithium-ion batteries using a Buck converter. The output is given using the Boost converter which uses a high frequency transformer. The voltage is then converted into A.C using H-Bridge. To reduce leakage inductance of the high frequency transformer snubber and clamping circuits are used. The secondary part of the inverter includes the filtering of the main supply to reduce voltage surges. The control signals are generated using TL494 PWM modulator which is used in a push-pull mode to keep the sinusoidal wave within the threshold. Commercially available inverters use Lead Acid batteries due to which they are bulky to move around and their charging time is quite long as well. The charging time of Lithium-Ion batteries is roughly one hour, and they are considerably smaller in size. The circuit design was completed in Proteus and the simulation was completed in the Simulink MATLAB.",
  },
  {
    title: "Scene Image Recognition via Bag of Words",
    description:
      "Implemented an algorithm in Python-3 that recognizes different scenes. Specific number of images from 15 different categories are given to the program. It then calculates the feature descriptors using HOG method. K-Means clustering is then performed on the descriptors and then histograms of descriptors are created. These labelled descriptors from histograms are passed to SVM to execute supervised learning. Then the test images are loaded and predicted. Results were generated in the form of confusion matrix. Accuracy achieved was roughly 0.4.",
    githubUrl: "https://github.com/danialkhilji/Scene-Recognition-SVM",
  },
  {
    title:
      "Harris key-points detector and its robustness to rotation and scaling",
    description:
      "Implemented a Harris key-point detector in Python-3 using OpenCV library. It successfully detected corners in the image. Frequency of corners was varied using the thresholding. Original image corners were compared with the rotated and scaled versions of the identical image. In rotation, image was rotated 24 times, each of 15-degree increment and each time its corners were matched with that of the original image. Similarly, eight scaled images, with scaling factor m=1.2, corners were compared with that of the original. All the results were then plotted to visualize better.",
    githubUrl: "https://github.com/danialkhilji/Harris-Corner-Detector",
  },
  {
    title: "Interactive Foreground Segmentation",
    description:
      "Implemented a basic version of the interactive image cut-out/segmentation approach called Lazy Snapping in Python-3. Test image along with corresponding auxiliary image depicting the background and foreground seed pixels are given to the program. Then the program is able to segment only the foreground successfully. Firstly, K-Means clustering on the colour pixels is executed which gives the centroids. Then the program calculates the likelihood of each pixel to belong to each cluster using the method similar to multivariate Gaussian Mixture Model.",
    githubUrl:
      "https://github.com/danialkhilji/Lazy-Snapping-Image-Segmentation",
  },
  {
    title: "Buck converter with feedback",
    description:
      "A buck converter is a form of DC-DC converter which steps down the voltage while increasing the current. The buck converter is attached with the feedback voltage from load so that whenever the load voltage varies the duty cycle accordingly to keep load voltage close to the desired value. In the project, TL494 IC is used to provide PWM signal to the circuit in which Vcc is supplied 12V and DTC is kept at ground. The 2K resistor is attached to the RT and 0.01uF capacitor is attached to the CT pins of the IC. Reference voltage of 5V is sent to the REF pin, using voltage divider, from the 1IN+ pin. The transistor used for switching is IRC530 MOSFET and its PWM is given from C1 pin of TL 494 IC which is the collector pin of the BJT output 1. The load resistor is of 2.5 Ohm and the freewheeling capacitor is a 470uF.",
  },
  {
    title: "Digit recognition from 0-9 using deep neural network",
    description:
      "The main objective of this project was to design and implement a deep neural network for the recognition of the digit ranging from 0 to 9. Network is fed with images of the handwritten digits and the network gives the highest output at a particular node according to the digit recognized. There are many available activation functions like sigmoid, Tanh, Relu, Leaky Relu etc. If the problem is a classification problem, the most common choice of activation function is sigmoid. Neural network and libraries were implemented in Jupyter Notebook. The network gave results with 97.22% accuracy.",
  },
  {
    title: "Carrier frequency offset algorithm",
    description:
      "The main objective of the project is to implement carrier frequency offset algorithm on TI DSP kit C6713. The two-stage algorithm for carrier frequency offset estimation in frequency selective fading channels for burst transmission with DSP implementation on SDR platform. The first stage (coarse estimation stage) provides a coarse estimate of CFO by using Modified Maximum Likelihood Data Aided (MMLDA) correlation-based algorithm. The second stage (fine estimation stage) estimates the residual offset error for each burst on sample by sample basis using blind estimation approach.",
  },
  {
    title: "Digital Multimeter",
    description:
      "Successfully designed and implemented a DC voltmeter and ammeter using an Arduino UNO as a controller for three ranges of voltmeter and single range of ammeter.",
  },
  {
    title: "Dual frequency patch antenna for wave propagation",
    description:
      'A patch antenna (microstrip antenna) is a type of radio antenna with a low profile, which can be mounted on a flat surface. It consists of a flat rectangular sheet or "patch" of metal, mounted over a larger sheet of metal called a ground plane. The objective of the project is to design a dual frequency patch antenna in ANSYS HFSS. The main design includes ground plane and a substrate (Roger 5870) over it and then a microstrip patch over substrate. The Coaxial probe is designed as a transmission line below the antenna. The design of patch antenna is made using DRIVEN MODAL type solution in HFSS. Driven modal gives the solution in terms of power. Whenever feed is given using modal solution, the results of excitation are better.',
  },
  {
    title: "Position control using PID",
    description:
      "The DC motors have been popular in the industry control area for a long time, because they have many good characteristics, for example: high start torque characteristic, high response performance, easier to implement linear control etc. The PID (Proportional Integral Derivative) controller maintains the output such that there is zero error between process variable and set point/ desired output by closed loop operations. PID uses three basic control behaviors that are called the parameters of the PID. The parameters of the PID controller kp, ki and kd (or kp, Ti and Td) can be manipulated to produce various response curves from a given process. The main objective of the experiment is to design a position PID controller and an encoder for a 12V DC motor. PID controllers are widely used in industrial plants because of their simplicity and robustness. The encoder was made using two IR (Infra-red) sensors where one of them is used to count the number of tips crossed and the other one is used to calculate the direction of rotation. The disc for the controller is laser cut from acrylic sheet. The code of PID is run using Arduino UNO and an H-bridge is used to control the rotation of the DC motor.",
  },
  {
    title: "Audio Amplifier",
    description:
      "Amplifier IC: TDA 2030. Class AB amplifier to implement stereo amplifier. Using two 5.6W speakers.",
  },
  {
    title: "FM receiver",
    description:
      "Implemented a Super Regenerative receiver which uses a single BJT to demodulate the signal. An audio amplifier is connected in series to amplify the signal.",
  },
  {
    title: "5-Band graphic equalizer",
    description:
      "The main objective of the project is to design and simulate the 5-band graphic equalizer within the given parameters. Design is made using MATLAB\u00ae GUI and it was simulated using SIMULINK\u00ae. Graphic equalizer (EQ) is used commercially to change the frequency response of any given audio file. It can be used to vary bass, treble etc. In the project, the equalizer is implemented on MATLAB\u00ae GUI incorporated with the options of selecting any .mp3 audio file from browser, five sliders to vary the frequency, buttons to play, stop and etc and input and output graphs. One octave bandpass filter standards are employed with center frequencies 63 Hz, 250 Hz, 1000Hz, 4000 Hz and 16000 Hz. The filter used is Butterworth both in simulation and GUI.",
  },
  {
    title: "Power supply",
    description:
      "Designed and implemented a power supply with three different outputs with 220V and 50Hz input. Outputs: 1.2V to 24V with 0.5A, -1.2V to -24V with 0.5A, 5V with 1A.",
  },
  {
    title: "Microwave oven controller",
    description:
      "Designed and implemented a basic microwave oven controller. The controller consists of predefined recipes to select and one can also set the values manually. The output of the controller is displayed on an LCD display and the buzzer is used to notify the user that the food has been cooked while motor is used for rotation of the bottom plate and temperature sensor is used to take temperature values. PIC18F252 microcontroller is used to control all the sensors.",
  },
  {
    title: "Active band pass filter",
    description:
      "An active band-pass filter allows only a specific range of frequencies to pass through. It is designed by cascading a low-pass filter with a high-pass filter. In active filters we use active elements like here we are using OP-Amps. An active high-pass filter with lower cutoff frequency of 500 Hz is cascaded with an active low-pass filter with a higher cutoff frequency of 10 KHz.",
  },
  {
    title: "Arithmetic Logic Unit",
    description:
      "Designed an arithmetic logic unit with 16 functions such as addition, subtraction, multiplication etc.",
  },
];
