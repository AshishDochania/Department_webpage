export default function Header(){
    return <>
        <div className="logo-holder">
            <img src="logo192.png" alt="college-logo"></img>
            <img src="logo192.png" alt="deparmenet-logo"></img>
          </div>
          <div className="header" style={{color:"#404040"}}>
          {/* ,backgroundColor: "#f5a80ecb" */}
            <section style={{padding:"20px"}}><h2>Departement of Metallurgical and Materials Enginnering</h2></section>
            <section className="bold" style={{paddingTop:"0px",marginTop:"-10px"}}>MatRS-2024</section>
            <section className="bold">Materials Research Symposium</section>
          </div>
    </>
}