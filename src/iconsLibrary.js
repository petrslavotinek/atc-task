import fontawesome from '@fortawesome/fontawesome';
import caretDown from '@fortawesome/fontawesome-free-solid/faCaretDown';
import caretRight from '@fortawesome/fontawesome-free-solid/faCaretRight';
import cloudUploadAlt from '@fortawesome/fontawesome-free-solid/faCloudUploadAlt';
import trashAlt from '@fortawesome/fontawesome-free-regular/faTrashAlt';
import file from '@fortawesome/fontawesome-free-regular/faFile';
import spinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import arrowCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowCircleLeft';

export const buildIconsLibrary = () => {
  fontawesome.library.add(
    caretDown,
    caretRight,
    trashAlt,
    cloudUploadAlt,
    file,
    spinner,
    arrowCircleLeft
  );
};