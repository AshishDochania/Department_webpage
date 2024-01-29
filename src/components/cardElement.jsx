export default function Card(props){
    return<div className="col red card2" onClick={()=>props.handle(props.val)}>
            <div className="card card-cover h-100 overflow-hidden  rounded-4 shadow-lg" style={{backgroundImage:"url()",backgroundRepeat:"no-repeat",backgroundColor:"#FFFC9B"}}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 pb-5 mt-0 mb-4 display-6 lh-1 fw-bold text">{props.des}</h3>
              </div>
            </div>
            </div>  
};