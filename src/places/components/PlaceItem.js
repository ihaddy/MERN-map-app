import React, { useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import "./PlaceItem.css";

export default function PlaceItem(props) {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  const openDeleteModal = () => setShowConfirmModal(true);
  const closeDeleteModal = () => setShowConfirmModal(false);
  const confirmDeleteHandler = () => {
    console.log("place deleted");
    closeDeleteModal();
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <iframe
            title="map"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={
              "https://maps.google.com/maps?q=" +
              props.coordinates.lat.toString() +
              "," +
              props.coordinates.lng.toString() +
              "&t=&z=15&ie=UTF8&iwloc=&output=embed"
            }
          ></iframe>
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=5a33be79e53caf0a07dfec499abf84b7b481f165"
          ></script>
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={closeDeleteModal}
        header="confirm delete"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={closeDeleteModal}>
              {" "}
              Cancel
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              {" "}
              Delete
            </Button>
          </>
        }
      >
        <p> Do you want to delete this place? This cannot be undone!</p>
      </Modal>

      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2> {props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              {" "}
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}> EDIT PLACE</Button>
            <Button danger onClick={openDeleteModal}>
              {" "}
              DELETE PLACE
            </Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
}
