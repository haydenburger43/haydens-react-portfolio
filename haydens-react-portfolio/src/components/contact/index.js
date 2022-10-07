import './index.scss'

const Contact = () => {
    return(
        <>
            <div className='container contact-page'>
                <h1>
                    Contact Me
                </h1>
                <div>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>

                            <li>
                                <input type="text" name="subject" placeholder="Subject" required />
                            </li>

                            <li>
                                <textarea placeholder='Message' name='message' required ></textarea>
                            </li>

                            <li>
                                <input type="submit" className='flat-button' value="SEND"></input>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact