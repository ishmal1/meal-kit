const desserts = [
  { id: 1, name: "Rose Muffin", price: 5, image: "/HomePage/HomeLeft/DessertsSection/cupcake-desserts-section.png" },
  { id: 2, name: "Caramel PunkCake", price: 5,  image: "/HomePage/HomeLeft/DessertsSection/cupcake-desserts-section.png" },
  { id: 3, name: "Berry Cake", price: 5,  image: "/HomePage/HomeLeft/DessertsSection/cupcake-desserts-section.png" },
]

export default function DessertsSection() {
  return (
    <div className="py-5 px-6">
      <h2 className="text-sm font-medium mb-6">HOT DESSERTS :</h2>
<div className="flex flex-row flex-wrap w-full gap-6">

        {desserts.map((dessert) => (
          <div
            key={dessert.id}
            className="flex  items-start gap-3"
          >
            {/* Image */}
            <img
              src={dessert.image}
              alt={dessert.name}
              className="w-12 h-12 object-cover "
            />

            {/* Text (name + price) */}
            <div className="flex flex-col">
              <h3 className="text-base  font-semibold">{dessert.name}</h3>
              <p className="text-orange-400">${dessert.price}</p>
            </div>
          </div>
        ))}
      </div>
</div>
 
  )
}
