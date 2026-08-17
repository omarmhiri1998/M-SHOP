import { giftingItems } from "../data/gifting";

import useUserStore from "../store/useUserStore";


function Gifting() {
  const addToCart = useUserStore(
    (state) => state.addToCart
  );

  const currentUser = useUserStore(
    (state) => state.currentUser
  );


  function handleAdd(item) {
    if (!currentUser) {
      alert("Please login first");
      return;
    }


    const product = {
      ...item,

      id: `gift-${item.id}`,

      price: Number(item.price),
    };


    addToCart(product);
  }


  return (
    <section
      className="
        px-[7%]
        pt-[180px]
        pb-[100px]
      "
    >

      {/* HEADER */}

      <div
        className="
          mx-auto
          mb-[60px]
          max-w-[600px]
          text-center
        "
      >

        <p
          className="
            mb-2
            font-sans
            text-[12px]
            font-medium
            uppercase
            tracking-[0.15em]
            text-[#C9A876]
          "
        >
          FOR GIFTING
        </p>


        <h1
          className="
            mb-[18px]
            font-serif
            text-[46px]
            italic
            text-[#2D2A26]
          "
        >
          Gift Boxes
        </h1>


        <p
          className="
            font-sans
            text-[16px]
            font-light
            leading-[1.7]
            text-[#7A6A5D]
          "
        >
          Beautifully hand-wrapped gift boxes,
          ready to delight, with a personalized
          note available upon request.
        </p>

      </div>


      {/* GRID */}

      <div
        className="
          grid
          grid-cols-1
          gap-10
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >

        {giftingItems.map((item) => (

          <div
            key={item.id}
            className="text-left"
          >

            {/* IMAGE */}

            <div>

              <img
                src={item.image}
                alt={item.name}
                className="
                  mb-[22px]
                  h-[320px]
                  w-full
                  rounded-[4px]
                  object-cover
                "
              />

            </div>


            {/* CATEGORY */}

            <p
              className="
                mb-2
                font-sans
                text-[11px]
                font-medium
                uppercase
                tracking-[0.15em]
                text-[#C9A876]
              "
            >
              {item.category}
            </p>


            {/* NAME */}

            <h3
              className="
                mb-2
                font-serif
                text-[22px]
                font-medium
                leading-[1.3]
                text-[#2D2A26]
              "
            >
              {item.name}
            </h3>


            {/* DESCRIPTION */}

            <p
              className="
                mb-5
                font-sans
                text-[14px]
                font-light
                leading-[1.5]
                text-[#7A6A5D]
              "
            >
              {item.description}
            </p>


            {/* PRICE + ADD */}

            <div
              className="
                flex
                items-center
                justify-between
              "
            >

              <span
                className="
                  font-serif
                  text-[17px]
                  text-[#2D2A26]
                "
              >
                {Number(item.price).toFixed(2)} €
              </span>


              <button
                onClick={() =>
                  handleAdd(item)
                }
                className="
                  cursor-pointer
                  rounded-full
                  border
                  border-[#2D2A26]
                  bg-transparent
                  px-[18px]
                  py-2
                  font-sans
                  text-[11px]
                  tracking-[0.1em]
                  text-[#2D2A26]
                  transition
                  duration-200

                  hover:bg-[#2D2A26]
                  hover:text-[#FAF6F0]
                "
              >
                ADD
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}


export default Gifting;