let rooms = [
  { type: "Phòng đơn", roomCode: "ABC1", name: "Phòng MIKA", image: "https://noithattrevietnam.com/uploaded/2020/06/cac-loai-phong-khach-san%20%287%29.jpg", price: 399999 },
  { type: "Phòng đôi", roomCode: "ABC2", name: "Phòng AHLO", image: "https://noithattrevietnam.com/uploaded/2020/06/cac-loai-phong-khach-san%20%284%29.jpg", price: 699999 },
  { type: "Phòng đơn", roomCode: "ABC3", name: "Phòng SAKY", image: "https://anviethouse.vn/wp-content/uploads/2021/12/Thiet-ke-phong-khach-san-4-sao-1-1.jpg", price: 599999 },
  { type: "Phòng đôi", roomCode: "ABC4", name: "Phòng HAHY", image: "https://noithattrevietnam.com/uploaded/2020/06/cac-loai-phong-khach-san%20%286%29.jpg", price: 799999 },
  { type: "Phòng đơn", roomCode: "ABC5", name: "Phòng WENDY", image: "https://noithattrevietnam.com/uploaded/2020/06/Deluxe-Suite.jpg", price: 699999 },
  { type: "Phòng đôi", roomCode: "ABC6", name: "Phòng LUNA", image: "https://noithattrevietnam.com/uploaded/2020/06/cac-loai-phong-khach-san%20%283%29.jpg", price: 399999 }
];

function displayRooms() {
  const tableBody = document.getElementById("roomData");
  tableBody.innerHTML = "";

  rooms.forEach((room, index) => {
    const row = `<tr>
            <td>${room.type}</td>
            <td>${room.roomCode}</td>
            <td>${room.name}</td>
            <td><img src="${room.image}" alt="${room.type}" style="width: 100px; height: 100px;"></td>
            <td>${room.price.toLocaleString('vi-VN')} VND</td>
            <td>
                <button class="btn-edit" onclick="editRoom(${index})">Sửa</button>
                <button class="btn-delete"onclick="deleteRoom(${index})">Xóa</button></td>
          </tr>`;
    tableBody.innerHTML += row;
  });
}

const form = document.getElementById("roomForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const type = document.getElementById("type").value;
  const roomCode = document.getElementById("roomCode").value;
  const name = document.getElementById("name").value;

  const image = document.getElementById("image").value;
  const price = document.getElementById("price").value;
  rooms.push({ type, roomCode, name: "", image, price });
  displayRooms();
  form.reset();
});

function editRoom(index) {
  const newType = prompt("Nhập loại phòng mới:", rooms[index].type);
  const newRoomCode = prompt("Nhập mã phòng mới:", rooms[index].roomCode);
  const newName = prompt("Nhập tên phòng mới:", rooms[index].name);
  const newImage = prompt("Nhập URL hình ảnh mới:", rooms[index].image);
  const newPrice = prompt("Nhập mức giá mới:", rooms[index].price);
  if (newType && newRoomCode && newName && newImage && newPrice) {
    rooms[index] = { type: newType, roomCode: newRoomCode, name: newName, image: newImage, price: newPrice };
    displayRooms();
  }
}


function deleteRoom(index) {
  const confirmation = confirm("Bạn có chắc chắn muốn xóa?");
  if (confirmation) {
  rooms.splice(index, 1);
  displayRooms();
  }
  }


displayRooms();
