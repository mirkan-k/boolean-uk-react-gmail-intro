import './InboxList.css'
import InboxLI from "./InboxLI"
import StarredLI from "./InboxStarredLI"
import ToggleLI from "./InboxToggleLI"

function InboxList() {
    return (
        <ul className="inbox-list">
            <InboxLI />
            <StarredLI />
            <ToggleLI />
        </ul>
    )
}

export default InboxList