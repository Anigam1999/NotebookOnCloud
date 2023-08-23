import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur perferendis tempore atque labore quis aut repellat, ipsam dolores, nam voluptatibus. Porro eligendi corporis odit laborum, ducimus placeat molestias consequatur?</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
