import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <p>
          <FaUser />
          {contact.name}
        </p>
        <p>
          <FaPhone />
          {contact.number}
        </p>
      </div>
      <button
        
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;