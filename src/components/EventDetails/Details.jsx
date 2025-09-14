import { useParams, Link } from "react-router-dom";
// ✅ CORRECTED PATH: As you specified
import { events } from "../data/events"; 
import Navbar from "../Navbar/Navbar"; 
import styles from "./Details.module.css"; 

// ✅ CORRECTED PATH: All asset imports now use ../Assets/
import brainOrange from "../Assets/brain_orange.png";
import brainBlue from "../Assets/brain_blue.png";
import rocket from "../Assets/rocket.png";
// ... import all other icon images as needed

const FloatingIcons = () => (
    <>
        <img src={brainOrange} alt="" className={styles.icon} style={{ width: '60px', top: '20%', right: '7%'}}/>
        <img src={brainBlue} alt="" className={styles.icon} style={{ width: '50px', top: '15%', left: '5%'}}/>
        <img src={rocket} alt="" className={styles.icon} style={{ width: '60px', top: '50%', left: '3%'}}/>
    </>
);

export default function Details() {
    const { id } = useParams();
    const event = events.find((e) => e.id === Number(id));

    if (!event) {
        return (
            <div className={styles['event-page-wrapper']}>
                <Navbar />
                <h1 style={{ color: 'white' }}>Event Not Found</h1>
            </div>
        );
    }

    return (
        <div className={styles['event-page-wrapper']}>
            <Navbar />
            <FloatingIcons />

            <div className={styles.container}>
                <div className={styles['left-panel']}>
                    <img src={event.image} alt={`${event.title} Poster`} />
                </div>
                <div className={styles['right-panel']}>
                    <h1 className={styles['event-main-title']}>{event.title}</h1>
                    
                    <div className={styles.block}>
                        <h2>Description</h2>
                        <p>{event.description}</p>
                    </div>

                    <div className={styles['info-row']}>
                        <div className={styles['info-block']}>
                            <h3>Teams</h3>
                            <p>{event.teamSize}</p>
                        </div>
                        <div className={styles['info-block']}>
                            <h3>Fees</h3>
                            <p>{event.registrationFee}</p>
                        </div>
                    </div>

                    {/* ✅ IMPROVEMENT: Only show Rules if they exist */}
                    {event.rules && event.rules.length > 0 && (
                        <div className={styles.block}>
                            <h2>Rules & Regulations</h2>
                            <ul>
                                {event.rules.map((rule, index) => (
                                    <li key={index}>{rule}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* ✅ FIX: Added missing Prizes section */}
                    {/* ✅ IMPROVEMENT: Only show Prizes if it exists */}
                    {event.prizes && (
                        <div className={styles.block}>
                            <h2>Prizes</h2>
                            <p>{event.prizes}</p>
                        </div>
                    )}

                    <div className={styles['info-row']}>
                        <div className={styles['info-block']}>
                            <h3>Location</h3>
                            <p>{event.venue}</p>
                        </div>
                        <div className={styles['info-block']}>
                            <h3>Date & Time</h3>
                            <p>{event.date} / {event.time}</p>
                        </div>
                    </div>
                    
                    {/* ✅ FIX: Added missing Organizer and Contact section */}
                    <div className={styles.block}>
                        <h2>Contact</h2>
                        <p>
                            <strong>Organizer:</strong> {event.organizer}
                            <br/>
                            {event.contacts && event.contacts.map((contact, index) => (
                                <span key={index}>
                                    <strong>Contact:</strong> {contact.name} - {contact.phone}
                                </span>
                            ))}
                        </p>
                    </div>

                    <div className={styles.btn}>
                        <Link to={event.registrationLink} className={styles['register-btn']}>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}