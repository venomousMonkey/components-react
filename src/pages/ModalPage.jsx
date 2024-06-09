import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I sell my soul !
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Jack ballast yo-ho-ho me fluke interloper black jack Pirate Round bilge
        rat carouser. Pinnace swab fire in the hole carouser fire ship topmast
        Arr dance the hempen jig capstan chase guns. Jolly Roger poop deck
        grapple lookout rigging hang the jib nipperkin boom topsail provost.
      </p>
      <p>
        Jack ballast yo-ho-ho me fluke interloper black jack Pirate Round bilge
        rat carouser. Pinnace swab fire in the hole carouser fire ship topmast
        Arr dance the hempen jig capstan chase guns. Jolly Roger poop deck
        grapple lookout rigging hang the jib nipperkin boom topsail provost.
      </p>
      <p>
        Jack ballast yo-ho-ho me fluke interloper black jack Pirate Round bilge
        rat carouser. Pinnace swab fire in the hole carouser fire ship topmast
        Arr dance the hempen jig capstan chase guns. Jolly Roger poop deck
        grapple lookout rigging hang the jib nipperkin boom topsail provost.
      </p>
      <p>
        Jack ballast yo-ho-ho me fluke interloper black jack Pirate Round bilge
        rat carouser. Pinnace swab fire in the hole carouser fire ship topmast
        Arr dance the hempen jig capstan chase guns. Jolly Roger poop deck
        grapple lookout rigging hang the jib nipperkin boom topsail provost.
      </p>
      <p>
        Jack ballast yo-ho-ho me fluke interloper black jack Pirate Round bilge
        rat carouser. Pinnace swab fire in the hole carouser fire ship topmast
        Arr dance the hempen jig capstan chase guns. Jolly Roger poop deck
        grapple lookout rigging hang the jib nipperkin boom topsail provost.
      </p>
      <p>
        Jack ballast yo-ho-ho me fluke interloper black jack Pirate Round bilge
        rat carouser. Pinnace swab fire in the hole carouser fire ship topmast
        Arr dance the hempen jig capstan chase guns. Jolly Roger poop deck
        grapple lookout rigging hang the jib nipperkin boom topsail provost.
      </p>
      <p>
        Jack ballast yo-ho-ho me fluke interloper black jack Pirate Round bilge
        rat carouser. Pinnace swab fire in the hole carouser fire ship topmast
        Arr dance the hempen jig capstan chase guns. Jolly Roger poop deck
        grapple lookout rigging hang the jib nipperkin boom topsail provost.
      </p>
      <p>
        Jack ballast yo-ho-ho me fluke interloper black jack Pirate Round bilge
        rat carouser. Pinnace swab fire in the hole carouser fire ship topmast
        Arr dance the hempen jig capstan chase guns. Jolly Roger poop deck
        grapple lookout rigging hang the jib nipperkin boom topsail provost.
      </p>
      <p>
        Jack ballast yo-ho-ho me fluke interloper black jack Pirate Round bilge
        rat carouser. Pinnace swab fire in the hole carouser fire ship topmast
        Arr dance the hempen jig capstan chase guns. Jolly Roger poop deck
        grapple lookout rigging hang the jib nipperkin boom topsail provost.
      </p>
      <p>
        Jack ballast yo-ho-ho me fluke interloper black jack Pirate Round bilge
        rat carouser. Pinnace swab fire in the hole carouser fire ship topmast
        Arr dance the hempen jig capstan chase guns. Jolly Roger poop deck
        grapple lookout rigging hang the jib nipperkin boom topsail provost.
      </p>
      <p>
        Jack ballast yo-ho-ho me fluke interloper black jack Pirate Round bilge
        rat carouser. Pinnace swab fire in the hole carouser fire ship topmast
        Arr dance the hempen jig capstan chase guns. Jolly Roger poop deck
        grapple lookout rigging hang the jib nipperkin boom topsail provost.
      </p>
      <p>
        Jack ballast yo-ho-ho me fluke interloper black jack Pirate Round bilge
        rat carouser. Pinnace swab fire in the hole carouser fire ship topmast
        Arr dance the hempen jig capstan chase guns. Jolly Roger poop deck
        grapple lookout rigging hang the jib nipperkin boom topsail provost.
      </p>
      <p>
        Jack ballast yo-ho-ho me fluke interloper black jack Pirate Round bilge
        rat carouser. Pinnace swab fire in the hole carouser fire ship topmast
        Arr dance the hempen jig capstan chase guns. Jolly Roger poop deck
        grapple lookout rigging hang the jib nipperkin boom topsail provost.
      </p>
    </div>
  );
}

export default ModalPage;
