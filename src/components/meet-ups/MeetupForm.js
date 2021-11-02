import Card from "../../ui/Card";
import classes from "./MeetupForm.module.css";
import {useRef} from "react";

function MeetupForm(props) {

    const titleInputRef = useRef();
    const addressInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const dataObject = {
            title: titleInputRef.current.value,
            address: addressInputRef.current.value,
            imagePath: imageInputRef.current.value,
            description: descriptionInputRef.current.value,
        }

        props.onAddMeetup(dataObject);

    }


    return <div>
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Title</label>
                    <input type="text" id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type="text" id="address" ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Image</label>
                    <input type="url" id="image" ref={imageInputRef} />
                    <div><img alt={titleInputRef.current && titleInputRef.current.value} src={imageInputRef.current && imageInputRef.current.value}/> </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id="description" ref={descriptionInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Add New MeetUp</button>
                </div>
            </form>
        </Card>
    </div>
}

export default MeetupForm;
