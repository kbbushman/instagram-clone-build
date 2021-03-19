import Modal from 'react-modal';
import { useHistory, useParams } from 'react-router';
import Post from './Post';
import { CloseIcon } from '../../icons';
import { usePostModalStyles } from '../../styles';

function PostModal() {
  const history = useHistory();
  const { postId } = useParams();
  const classes = usePostModalStyles();

  return (
    <>
      <Modal
        overlayClassName={classes.overlay}
        onRequestClose={() => history.goBack()}
        ariaHideApp={false}
        style={{
          content: {
            display: 'flex',
            alignItems: 'center',
            maxWidth: 935,
            width: '100%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            margin: 0,
            padding: 0,
            overflow: 'none',
            WebkitOverflowScrolling: 'touch',
          }
        }}
        isOpen
      >
        <Post id={postId} />
      </Modal>
      <div className={classes.close} onClick={() => history.goBack()}>
        <CloseIcon />
      </div>
    </>
  );
}

export default PostModal;
