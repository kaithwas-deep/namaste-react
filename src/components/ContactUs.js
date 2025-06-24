const ContactUs = () => {
    return (
        <div>
            <h1 className="font-bold text-2xl text-center">Contact Us</h1>
            <h2 className="font-bold text-xl text-center mb-4">Welcome to Contact Us Page.</h2>
            <form className="text-center">
                <input className="border border-solid shadow m-2 px-2 py-1 rounded-md" type="text" name="name" placeholder="Name" />
                <input className="border border-solid shadow m-2 px-2 py-1 rounded-md" type="text" name="message" placeholder="Message" />
                <button className="bg-gray-200 px-2 m-2 rounded-md font-bold py-1">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs;