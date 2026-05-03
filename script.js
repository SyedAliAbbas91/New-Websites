 
        let isStarted = false;
        let state = {
            basePrice: 0,
            fareMultiplier: 1,
            fleetSurcharge: 0,
            fleetName: '',
            cabinClass: 'Economy',
            foodTotal: 0,
            menuItems: [],
            seat: '',
            name: '',
            email: ''
        };

        const menusByClass = {
            "Economy": [
                { name: "Pasta Primavera", price: 15, img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=400" },
                { name: "Roasted Chicken", price: 18, img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400" },
                { name: "Greek Salad", price: 12, img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400" },
                { name: "Beef Lasagna", price: 22, img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400" },
                { name: "Vegetable Curry", price: 16, img: "https://images.unsplash.com/photo-1452948491233-ad8a1ed01085?w=400" },
                { name: "Club Sandwich", price: 14, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400" },
                { name: "Fruit Selection", price: 10, img: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400" },
                { name: "Chocolate Mousse", price: 9, img: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=400" },
                { name: "Hummus & Pita", price: 11, img: "https://images.unsplash.com/photo-1548940740-20472c4c94bb?w=400" },
                { name: "Cheese Omelette", price: 13, img: "https://images.unsplash.com/photo-1510629954389-c1e0da47d414?w=400" },
                { name: "Blueberry Pancakes", price: 14, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?w=400" },
                { name: "Quinoa Salad", price: 15, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
                { name: "Apple Tart", price: 8, img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400" }
            ],
            "Business": [
                { name: "Seared Salmon", price: 45, img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400" },
                { name: "Lamb Chops", price: 55, img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
                { name: "Mezze Platter", price: 40, img: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=400" },
                { name: "Beef Tenderloin", price: 65, img: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?w=400" },
                { name: "Shrimp Risotto", price: 50, img: "https://images.unsplash.com/photo-1534422298391-e4f8c170db0f?w=400" },
                { name: "Duck Confit", price: 58, img: "https://images.unsplash.com/photo-1514516369414-781446b224a0?w=400" },
                { name: "Truffle Ravioli", price: 48, img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400" },
                { name: "Gourmet Cheese", price: 35, img: "https://images.unsplash.com/photo-1486297678162-ad2a19b05844?w=400" },
                { name: "Tiramisu", price: 25, img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400" },
                { name: "Lobster Bisque", price: 42, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400" },
                { name: "Vintage Brut", price: 120, img: "https://images.unsplash.com/photo-1558001256-026937885b84?w=400" },
                { name: "Artisanal Bread", price: 15, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
                { name: "Berry Sorbet", price: 20, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" }
            ],
            "First": [
                { name: "Caviar Beluga", price: 210, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
                { name: "Wagyu Fillet", price: 180, img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
                { name: "Lobster Tails", price: 155, img: "https://images.unsplash.com/photo-1553243772-0a1e0f977d46?w=400" },
                { name: "Sushi Omakase", price: 140, img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400" },
                { name: "Truffle Steak", price: 195, img: "https://images.unsplash.com/photo-1558030006-450675393462?w=400" },
                { name: "King Crab Legs", price: 175, img: "https://images.unsplash.com/photo-1599458252573-56ae36120de1?w=400" },
                { name: "Dom Pérignon", price: 350, img: "https://images.unsplash.com/photo-1594460741575-38438676f30e?w=400" },
                { name: "Saffron Risotto", price: 125, img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400" },
                { name: "Sea Bass Fillet", price: 145, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400" },
                { name: "Gold Leaf Cake", price: 95, img: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400" },
                { name: "Wild Mushroom", price: 85, img: "https://images.unsplash.com/photo-1460306423918-992f79ca3431?w=400" },
                { name: "Aged Ribeye", price: 165, img: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?w=400" },
                { name: "Macallan 25", price: 420, img: "https://images.unsplash.com/photo-1527281405159-35d5b5d7bc1b?w=400" }
            ]
        };

        function startJourney() {
            isStarted = true;
            navigate('booking');
            generateSeats();
        }

        function validateBooking() {
            const nameEl = document.getElementById('p-name');
            const emailEl = document.getElementById('p-email');
            const destEl = document.getElementById('dest-select');
            if(!nameEl.value || !emailEl.value || destEl.value == "0") {
                alert("Please fill in all highlighted fields.");
                return;
            }
            state.name = nameEl.value;
            state.email = emailEl.value;
            navigate('fleet');
        }

        function navigate(id) {
            document.querySelectorAll('.app-layer').forEach(l => l.classList.remove('active'));
            document.getElementById('layer-' + id).classList.add('active');
            if(id === 'menu') generateMenu();
            if(id === 'confirm') updateTicket();
            window.scrollTo(0,0);
        }

        function updatePrice() {
            state.basePrice = parseFloat(document.getElementById('dest-select').value);
            refreshTotal("Route Selected");
        }

        function selectFleet(name, surcharge, el) {
            state.fleetName = name;
            state.fleetSurcharge = surcharge;
            document.querySelectorAll('.fleet-card').forEach(c => c.classList.remove('selected'));
            el.classList.add('selected');
            refreshTotal(name + " Selected");
        }

        function selectCabin(name, multiplier, el) {
            state.cabinClass = name;
            state.fareMultiplier = multiplier;
            document.querySelectorAll('.class-card').forEach(c => c.classList.remove('selected'));
            el.classList.add('selected');
            refreshTotal(name + " Class Selected");
        }

        function generateMenu() {
            const grid = document.getElementById('menu-grid');
            const dishes = menusByClass[state.cabinClass];
            grid.innerHTML = dishes.map(d => `
                <div class="bg-white p-3 border hover:border-red-600 transition group">
                    <img src="${d.img}" class="h-28 w-full object-cover mb-3">
                    <h4 class="text-[10px] font-black truncate uppercase mb-1">${d.name}</h4>
                    <p class="text-red-600 font-black">$${d.price}</p>
                    <button onclick="addFood('${d.name}', ${d.price})" class="w-full mt-3 bg-slate-900 text-white text-[9px] py-2 font-black uppercase">Add</button>
                </div>
            `).join('');
        }

        function addFood(name, price) {
            state.menuItems.push(name);
            state.foodTotal += price;
            refreshTotal(name + " Added");
        }

        function generateSeats() {
            const grid = document.getElementById('seat-map');
            grid.innerHTML = '';
            for(let i=1; i<=32; i++) {
                const occ = Math.random() > 0.8 ? 'occupied' : '';
                grid.innerHTML += `<div class="seat ${occ}" onclick="setSeat(this, '${i}A')">${i}A</div>`;
            }
        }

        function setSeat(el, num) {
            if(el.classList.contains('occupied')) return;
            document.querySelectorAll('.seat').forEach(s => s.classList.remove('selected'));
            el.classList.add('selected');
            state.seat = num;
            refreshTotal("Seat " + num + " Assigned");
        }

        function refreshTotal(msg) {
            const total = (state.basePrice * state.fareMultiplier) + state.fleetSurcharge + state.foodTotal;
            document.getElementById('nav-total').innerText = '$' + total.toLocaleString();
            document.getElementById('toast-total').innerText = '$' + total.toLocaleString();
            document.getElementById('toast-msg').innerText = msg;
            const toast = document.getElementById('price-toast');
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 3000);
        }

        function updateTicket() {
            const destName = document.getElementById('dest-select').options[document.getElementById('dest-select').selectedIndex].text;
            document.getElementById('t-name').innerText = state.name.toUpperCase();
            document.getElementById('t-dest').innerText = destName.split(' - ')[0];
            document.getElementById('t-fleet').innerText = state.fleetName || "Aviation Class";
            document.getElementById('t-class').innerText = state.cabinClass;
            document.getElementById('t-seat').innerText = state.seat || "TBD";
            document.getElementById('t-menu').innerText = state.menuItems.length > 0 ? state.menuItems.join(' • ') : "None Selected";
        }

        function openCancelModal() { document.getElementById('cancel-modal').classList.remove('hidden'); }
        function closeCancelModal() { document.getElementById('cancel-modal').classList.add('hidden'); }
    