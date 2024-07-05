import homePageImage from '../../../assets/vanHomePage.png';
import './introPage.css';

function IntroPage() {


    return (
        <>
            <section id='intro-page-section'>
                <img src={homePageImage} alt="snow covered mountains,lake,sun" />
                <div>
                    <h1>You got the travel plans, we got the travel vans.</h1>
                    <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <button>Find your Van</button>
                </div>
            </section>
        </>
    )
}

export default IntroPage;