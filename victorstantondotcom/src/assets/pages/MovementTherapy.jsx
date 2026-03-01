import "./MovementTherapy.css";
import MT from "../images/MT-Pic.png"


function MovementTherapy() {


  return (
    <>
      <main>
          <h1 id='mt-title'>Movement Therapy</h1>
          <div className="mt-main">
            <img id='mt-pic' src={MT} alt="Victor Stanton Movement Therapist" />
            <p id='mt-text'>
              I am a Licensed Massage Therapist and Certified Strength & Conditioning Specialist with experience in physiotherapy clinics, athletic performance settings, and holistic fitness environments across New York City. My work integrates deep tissue and Swedish massage, proprioceptive neuromuscular facilitation stretching, range-of-motion therapy, and individualized strength programming to restore mobility, reduce pain, and improve performance. I have treated clients ranging from general wellness patients to individuals with amputations. My background also includes years of strength coaching and movement therapy at Attune Holistic Fitness, where I built programs focused on fat loss, injury prevention, and long-term functional strength.
            </p>
          </div>
      </main>
    </>
  )
}

export default MovementTherapy