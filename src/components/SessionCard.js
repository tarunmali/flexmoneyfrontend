// SessionCard component displays slot details and payment ID
const SessionCard = ({ slotId, paymentId }) => {
    const pattern = /^(\d{4})([a-zA-Z]+)(\d+)$/;
    const match = pattern.exec(slotId);
  

  
    const year = match[1];
    const monthName = match[2].charAt(0).toUpperCase() + match[2].slice(1).toLowerCase();
    const slotNumber = match[3];
  

    let selectedSlotDetails = "";
    switch (parseInt(slotNumber)) {
      case 1:
        selectedSlotDetails = "6:00 AM - 7:00 AM";
        break;
      case 2:
        selectedSlotDetails = "7:00 AM - 8:00 AM";
        break;
      case 3:
        selectedSlotDetails = "8:00 AM - 9:00 AM";
        break;
      case 4:
        selectedSlotDetails = "5:00 PM - 6:00 PM";
        break;
      default:
        selectedSlotDetails = "Invalid slot selection.";
    }
  
    return (
      <div className="rounded-lg p-4 mb-4 bg-blue-200 w-3/4">
        <h2 className="text-lg font-bold mb-2">
          Slot Details:
          <br />
          Year: {year}
          <br />
          Month: {monthName}
          <br />
          Slot Number: {slotNumber}
        </h2>
        <p>Payment ID: {paymentId}</p>
        {/* Ensure conditional rendering only displays slot time if selectedSlot has a valid value */}
        {selectedSlotDetails && <p>Slot Time: {selectedSlotDetails}</p>}
      </div>
    );
  };
  
  export default SessionCard;