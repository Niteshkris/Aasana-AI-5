import React from 'react'
import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading" style={{color:'black'}}>About</h1>
            <div className="about-main">
                <p className="about-content" style={{color:'black'}}>
                    Welcome to Aasana AI - your real-time, intelligent yoga companion, designed to help you achieve balance, flexibility, and peace through precise, AI-driven guidance. Our mission is to make the art and science of yoga accessible to everyone, from beginners to seasoned practitioners, using cutting-edge artificial intelligence technology that assists, corrects, and supports your yoga journey.

                    Aasana AI is a personal project turned open-source initiative, created with a vision to empower both yoga enthusiasts and developers interested in AI and machine learning. The AI-driven application not only allows users to refine their yoga practice but also serves as a valuable resource for developers who are looking to understand or improve AI-based pose detection. This project is entirely open-source, with all code available on GitHub. 
                    <br></br>
                    We invite you to explore, learn, and even contribute: <a style={{color:'black'}} target='_blank' href="https://github.com/Niteshkris/Aasana-AI-5">https://github.com/Niteshkris/Aasana-AI-5</a>.
                    <br></br>
                    <br></br>
                    1. Pose Detection with Keypoints: Using the powerful, pretrained TensorFlow MoveNet model, aasana AI identifies key body parts and maps their precise coordinates. This process allows us to understand how well a pose is being performed by analyzing the alignment of body parts, making it possible to detect even subtle misalignments.
                    <br></br>
                    <br></br>
                    2. Classification for Accuracy: After pinpointing the body's key coordinates, a custom-built neural network uses this data to classify poses accurately. This additional model ensures that when a user performs a pose, aasana AI can evaluate and provide real-time feedback if the pose matches the target with over 95% accuracy.
                    <br></br>
                    <br></br>

                </p>
                <div className="developer-info">
                    <h4 style={{color:'black'}}>About Our Team</h4>
                    <p className="about-content" style={{color:'black'}}>Welcome to aasana AI, where technology meets tranquility. Our mission is to make yoga accessible, personalized, and enjoyable for everyone, regardless of experience level. Using advanced AI guidance, we help you perfect your poses, deepen your practice, and find balance anytime, anywhere. Embrace the art of mindful movement with aasana AI — your intelligent path to wellness.
                    </p>
                </div>
            </div>
        </div>
    )
}
