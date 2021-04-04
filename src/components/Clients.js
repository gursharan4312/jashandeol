import React from "react";

function Clients({ clients }) {
  return (
    <>
      <h2 className="mt-4">Clients</h2>
      <div className="clients-container mb-4">
        {clients.map((client, i) => (
          <div className="client" key={i}>
            {client.logo ? (
              <>
                <img alt={client.name} src={client.logo} />
                <h4>{client.name}</h4>
              </>
            ) : (
              <h2>{client.name}</h2>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Clients;
