# Introduction
Named "Stained Glass Echo," this project is a real-time audio-visual interaction experiment that combines classic cultural symbols of Barcelona with modern generative art algorithms.
The core of the work lies in the digital reconstruction of Antoni Gaudí’s visionary naturalistic architecture and the "Panot de Flor" (rose street tiles) commonly found throughout Barcelona. Using p5.js and GLSL shader technology, I have built a complex mathematical fractal system. This system transforms these static geometric symbols into a digital landscape that breathes, pulses, and evolves like a living organism.
What makes "Stained Glass Echo" unique is its high level of interactivity. It is not only an audio-driven visual feast but also an interactive sensory space. By integrating computer vision algorithms, the system can capture and analyze the audience's body movements. Every wave of a user's hand acts like a beam of sunlight piercing through the stained glass of the Sagrada Família, triggering an immediate and dramatic evolution of the screen's color palette.
In this piece, the role of the audience shifts from being a mere "observer" to becoming a "co-creator" and "builder" of the digital world. Through this interaction, I aim to explore how ancient urban heritage can create a new sensory resonance with humans through code, allowing classical aesthetics to find new life within the flow of algorithms.

# Concept and Background Research
## Creative Inspiration
The core inspiration for this work is derived from Antoni Gaudí’s philosophy of architectural naturalism. Visually, the project draws on the fractal light and shadows created by the stained glass windows inside the Sagrada Família. Furthermore, it incorporates the symmetrical geometric aesthetics of the "Panot de Flor"—the iconic rose-shaped street tiles found throughout Barcelona.
## Concept and Motivation
The starting point of this project reflects Gaudí’s famous belief that “the straight line belongs to men, the curved one to God.” By using complex mathematical fractal algorithms, this system emulates the growth logic of nature. The goal is to explore how ancient architectural art can establish new sensory connections with modern audiences through interactive digital code.
## Artistic
Tradition The work carries forward the legacy of "Trencadís"—the traditional Catalan Modernist mosaic technique of using broken ceramic shards. However, in terms of expression, it transforms these static fragments into fluid digital pixels, reimagining a classic craft for the contemporary era.

# Technical Implementation
This system adopts an interactive approach that integrates both software and hardware:
## Core Engine (p5.js & WebGL)
By using the WebGL mode of p5.js as the rendering foundation, the system draws vertices directly in clip space using beginShape(TRIANGLES). This ensures that the visuals are 100% full-screen without any coordinate offset.
## Graphics Rendering (GLSL Shader)
### Fractal Iteration
Complex geometric patterns are generated within shader.frag through the nested iterations of fract and sin functions.
### Visual Focus
A smoothstep function is used to create a vignette effect, where the center is sharp and the edges are blurred. This simulates the deep, divine atmosphere found inside the Sagrada Família.
## Interaction Mechanism
### Audio-Reactive (FFT)
The system extracts Bass and Treble frequencies from the music using Fast Fourier Transform. These values control the pulsation frequency and color contrast of the patterns.
### Gesture Recognition (Pixel Difference)
Body movements are captured via a camera, and a Pixel Difference algorithm is used to calculate the intensity of the action in real-time. Whenever a significant waving motion is detected, the system triggers a random accumulation of u_colorOffset. This changes the color tone of the entire scene, achieving the goal of "repainting with every wave.

# Reflection and Future Development
## Project Summary
The project has successfully achieved the transition from static symbols to dynamic interaction. Specifically, it strikes a good balance between full-screen rendering and the sensitivity of gesture-triggered color changes, providing the audience with a powerful, immersive sensory experience.
## Areas for Improvement
At present, gesture detection relies heavily on brightness differences. This means that the sensitivity of the system tends to decrease in low-light environments.
## Future Development
Spatial Modeling: In the future, I plan to introduce 3D models and project the fractal patterns onto simplified models of the interior columns of the Sagrada Família.
Multi-user Interaction: I aim to explore support for simultaneous interactions by multiple people. This would allow several audience members to collaborate on creating a massive "digital mosaic" mural.

# References 
Gaudí, A. (2014). Gaudí: The Complete Works. Taschen. 

Zerbst, R. (2002). Antoni Gaudí: 1852-1926: A Life Devoted to Architecture. Taschen.

Ajuntament de Barcelona. (2015). The History of the Barcelona Pavement: Panot de Flor.

Levin, G. (2006). Computer Vision for Artists and Designers.

Google Gemini. (2026). Gemini 3 Flash. [Large language model]. Available at: https://gemini.google.com/ (Accessed: 18 April 2026).

Music:https://www.bensound.com/royalty-free-music?tag[]=Cinematic&amp;amp;sort=relevance

# Author
ZHAOYING YE

# Video
https://vimeo.com/1184247820?fl=ip&fe=ec

# You can try it:
https://editor.p5js.org/Yessy0910/full/A5KDxSG8a

# DATE:
26/4/2026
