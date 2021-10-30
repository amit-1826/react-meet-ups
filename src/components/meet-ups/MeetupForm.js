import Card from "../../ui/Card";
import classes from "./MeetupForm.module.css";

function MeetupForm() {
    return <div>

        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='title'>Title</label>
                    <input type="text" id="title" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type="text" id="address" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Image</label>
                    <input type="url" id="image" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id="description"></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add New MeetUp</button>
                </div>
            </form>
        </Card>
    </div>
}

export default MeetupForm;
