import {FaTimes} from 'react-icons/fa'
import PropTypes from "prop-types"
import Card from "./shared/Card"

function Feedbackitem({item, handleDelete}) {


  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

Feedbackitem.prototype = {
    item: PropTypes.object.isRequired
}

export default Feedbackitem