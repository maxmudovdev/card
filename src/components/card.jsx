export const Card = () =>{
    return (
        <div className="card p-10 inline-block border-2 border-black-500">
            <img  src="https://picsum.photos/id/1/200/150" alt="" />
           <div className="card__bottom ">
           <h2 className="">Card</h2>
            <p>Lorem ipsum dolor sit amet <br />
             consectetur adipisicing elit. <br />
              Deserunt, inventore.</p>
            <a className="flex" href="">
                <p>Card link</p>
            </a>
            <a href="">
                <p>Another link</p>
            </a>
           </div>

        </div>
    )
}