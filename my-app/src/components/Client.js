const Client = ()=>{
    return (
<section className="py-10 bg-gray-50 overflow-hidden">
  <div className="relative w-full">

    {/* TRACK */}
    <div className="flex w-max animate-scrollLeft">

      {/* FIRST SET */}
      {[1,2,3,4,5,6].map((item, index) => (
        <div key={"first-"+index} className="flex-shrink-0 w-32 mx-5">
          <img
            src={`img/clients/client-${item}.png`}
            alt=""
            className="w-full"
          />
        </div>
      ))}

      {/* SECOND SET (CLONE) */}
      {[1,2,3,4,5,6].map((item, index) => (
        <div key={"second-"+index} className="flex-shrink-0 w-32 mx-5">
          <img
            src={`img/clients/client-${item}.png`}
            alt=""
            className="w-full"
          />
        </div>
      ))}

    </div>

  </div>
</section>
    )
}

export default Client;