const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us!</p>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="4"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;