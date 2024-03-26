document.addEventListener("DOMContentLoaded", function() {
    const rooms = [
      { type: "Phòng đơn", roomCode: "ABC1", name: " King", image: "phongabc1.jpg", price: "399.999 VNĐ" },
      { type: "Phòng đôi", roomCode: "ABC2", name: "DELUXE ", image: "phongabc2.jpg", price: "399.999 VNĐ" },
      { type: "Phòng đôi", roomCode: "ABC3", name: "Premium ", image: "phongabc3.jpg", price: "399.999 VNĐ" },
      { type: "Phòng đơn", roomCode: "ABC4", name: "Phòng Loại Sang Room", image: "phongabc4.jpg", price: "399.999 VNĐ" },
      { type: "Phòng đơn", roomCode: "ABC5", name: " River", image: "phongabc5.jpg", price: "399.999 VNĐ" },
      { type: "Phòng đôi", roomCode: "ABC6", name: "WENDYYY", image: "phongabc6.jpg", price: "399.999 VNĐ" },
      { type: "Phòng đơn", roomCode: "ABC5", name: " View", image: "phongabc5.jpg", price: "399.999 VNĐ" },
      { type: "Phòng đôi", roomCode: "ABC6", name: "Alux", image: "phongabc6.jpg", price: "399.999 VNĐ" }
    ];

    const roomContainer = document.getElementById("roomList");

    function displayRooms(rooms) {
      roomContainer.innerHTML = "";
      rooms.forEach(room => {
        const card = document.createElement("div");
        card.classList.add("room-card");
        card.innerHTML = `
          <img src="${room.image}" alt="${room.name}">
          <div class="room-card-info">
            <h4>${room.name}</h4>
            <p>${room.type}</p>
            <p>${room.price}</p>
            <a href="phong${room.roomCode}.html" class="chitiet">XEM CHI TIẾT</a>
          </div>
        `;
        roomContainer.appendChild(card);
      });
    }

    displayRooms(rooms);

    document.getElementById("searchForm").addEventListener("submit", function(event) {
      event.preventDefault();
      const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
      const filteredRooms = rooms.filter(room => room.name.toLowerCase().includes(searchTerm));
      displayRooms(filteredRooms);
    });
  });