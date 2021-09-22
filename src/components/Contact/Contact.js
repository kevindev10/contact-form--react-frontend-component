import React,{Component} from 'react';
import './contact.css';
import banner from './banner.jpg';
import bottomBanner from './bottomBanner.jpg';
import Button from '@material-ui/core/Button';
import ReCAPTCHA from "react-google-recaptcha";

const intialState ={
	
	email:'',
	phone:'',
	message:'',
	yourName:'',
	reCaptcha:'',
	
}


class Contact extends Component {
	
	constructor(props){
		super(props);
		this.state = intialState;
		this.onButtonSubmit = this.onButtonSubmit.bind(this)
	}

	
	onYourNameChange = (event) =>{
		this.setState({yourName:event.target.value})
		
	}

	onEmailChange = (event) =>{
		this.setState({email:event.target.value})
	}



	onPhoneChange = (event) =>{
		this.setState({phone:event.target.value})
	
	}

	onMessageChange = (event) =>{
		this.setState({message:event.target.value})
	}

	 onReCaptureChange = (value) =>{
		
		this.setState({reCaptcha:value})
		
	}






	onButtonSubmit = (event) =>{

		event.preventDefault();
	
	 fetch('http://192.168.5.1:3001/contactUs', {
		 method:'post',
		 headers:{'Content-Type':'application/json'},
		 body:JSON.stringify({
		 
		 email:this.state.email,
		 phone:this.state.phone,
		 message:this.state.message,
		 yourName:this.state.yourName,
		 captcha:this.state.reCaptcha
		
		 })
	 })
	 .then(response =>response.json())
	 .then(data => {
			console.log(data)

		 
	 })

	 this.setState(intialState);

 }
 





	render(){
		

		 



		return(
					<div>


						<div className='div-background-images  'style={{"backgroundImage": "url(" + banner + ") ",  }}>

									<article className="bg-black-60 our-work-background-cover ">

															<section  >
																<h1  className='white tl  our-work-header header-on-mobile header-margin-top-on-mobile-fix' style={{'fontSize':'4.6rem','marginLeft':'8.8%', 'marginRight':'8.8%' }} >
																GET IN TOUCH
																</h1>

																
																<p className='white tl header-paragraph-1-on-mobile marginTop-on-mobile-fix' style={{'fontSize':'1.0rem','marginLeft':'8.8%', 'marginRight':'8.8%','marginTop':'-4vh' }} >
																Whether you are stopping by to say ‘hi’ or to talk about your next website, get in touch, we can’t wait to hear from you.
																</p>
													
															</section>
													

																						
									</article>  

							</div> 




						
					<main>
			    	<div className='pv4 flex contact-main-flex' style={{'width':'82.4%' ,'marginLeft':'8.8%', 'marginRight':'8.8%'}}>
			    	
			    	<article className='contact-getintouch-width' style={{'width':'40%'}}>
			    			
							    <h2 className="  mb3 mt4 tl " style={{'fontSize':'1.8rem' }}>
							      CONTACT US

							    </h2>
							    <h2 className="  mt4   mb4 " style={{'color':'#3F1717', 'fontSize':'1.4rem'}}>
                    
							      Telephone <i className="fas fa-phone fa-1x ml3 blue"></i>
							    </h2>
                  
                  <a href="tel:0789563415" className='instead-of-gray no-underline ' style={{ 'fontSize':'1.0rem'}}> (+254) 0789563415</a><br/><br/>

                  <a href="tel:0721490923" className='instead-of-gray no-underline' style={{ 'fontSize':'1.0rem'}}>(+254) 0721490923</a><br/>


                  <div style={{'borderTop':'1px solid #B8B8B8 '}}  className='mv4  mr5 linez'/>




                  <h2 className="  mt0   mb4 " style={{'color':'#3F1717', 'fontSize':'1.4rem'}}>
                    
							      WhatsApp <i className=" fab fa-whatsapp-square fa-1x ml3 green "></i>
							    </h2>
                  
                  <a href="https://wa.me/254789563415" target="blank" rel="noreferrer" className='no-underline instead-of-gray'  style={{ 'fontSize':'1.0rem'}}>	(+254) 0789563415  </a>


							    <div style={{'borderTop':'1px solid #B8B8B8 '}}  className='mv4  mr5 linez'/>




							    <h2 className="  mt0  mb4  " style={{'color':'#3F1717',  'fontSize':'1.4rem'}}>
							      Email <i className="fa fa-envelope fa-1x ml3 blue" aria-hidden="true"></i>
							    </h2>
							    <p className='pv3 email-us'>
									<a href="mailto:sales@flexdevske.co.ke"  className=' instead-of-gray no-underline dim '  style={{"wordWrap": "breakWord", 'fontSize':'1.0rem'}} >sales@flexdevske.co.ke </a>							
								</p>

                <a href="mailto:flexdevske@gmail.com"  className=' instead-of-gray no-underline dim  '  style={{"wordWrap": "breakWord", 'fontSize':'1.0rem'}} >flexdevske@gmail.com </a>		
							    
							    


							    <div style={{'borderTop':'1px solid #B8B8B8 '}}  className='mv4  mr5 linez'/>




							    <h2 className="f4 mid-instead-of-gray lh-title mt0  fw9 mb4" style={{'color':'#3F1717', 'fontSize':'1.4rem'}}>
							      Address <i className="fa fa-map-marker fa-1x ml3 red" aria-hidden="true"></i>
							    </h2>
                  <p className="f4   instead-of-gray  "  style={{"wordWrap": "breakWord", 'fontSize':'1.0rem'}}> 
                  P.O BOX 26560 00504, </p><br/>
							    <p className="f4   instead-of-gray  "  style={{"wordWrap": "breakWord", 'fontSize':'1.0rem'}}> Nairobi, Kenya. </p>
							    <div style={{'borderTop':'1px solid #B8B8B8 '}}  className='mv4  mr5 linez'/>
							    	
							    
							    
							  
			    	</article>


			    	<div className='contact-getfreequote-width' style={{'width':'60%'}} >
			    			
			    	<h2  className=" mb3 mt4 tl " style={{'fontSize':'1.9rem', }}>CONTACT FORM</h2>

			    	<div >
				    	

			    		<div>

			    			<article className="br2 ba  b--black-10 mv4    getfreequote-main" style={{'backgroundColor':'#FBFBFB'}} >
								<main className="pa4 black-80  ">
								  <div className="" >
								    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
								      




								      <div className="mt3 flex input-boxes-flex-on-mobile">
								        <label className="w-30 db  select-options-property-font" htmlFor="yourName" style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>Your Name :</label>
								        <input
								         onChange ={this.onYourNameChange}
								         className="input-box-styling  instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
                         style={{ 'fontSize':'1.0rem'}}
								         type="name" 
								         name="yourName" 
								          id="yourName" 
								          />

								      </div>




								      <div className="mt3 flex input-boxes-flex-on-mobile">
								        <label className="w-30 db  select-options-property-font" htmlFor="email-address" style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>Email :</label>
								        <input 

								        	onChange ={this.onEmailChange}
									        className=" input-box-styling  instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
                          style={{ 'fontSize':'1.0rem'}}
									        type="email"
									        name="email-address"  
									        id="email-address"
									        
									      />
								      </div>



								      	<div className="mv3 flex input-boxes-flex-on-mobile">
								        <label className="w-30 db  select-options-property-font " htmlFor="phone" style={{'color':'#3F1717',  'fontSize':'1.0rem'}}>Phone :</label>
								        <input
								        	 onChange ={this.onPhoneChange}
									         className="input-box-styling  instead-of-gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70 " 
                           style ={{ 'fontSize':'1.0rem'}}
									         type="tel" 
									         name="phone" 
									          id="phone"
									          
									     />
								      </div>

											
								      <div className="mt5 ">
								        <label className="db   f4 pb3 select-options-property-font" htmlFor="message" style={{'color':'#3F1717',  'fontSize':'1.0rem'}}> Okay great — We'd love to help you with this project. Can you explain a little more about what you exactly need?</label>
								        <textarea
								         onChange ={this.onMessageChange}
								         className="input-box-styling tl  br2 shadow-5  instead-of-gray  pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                         style={{ 'fontSize':'1.0rem'}}
								         type="text" 
								         name="message"
								         placeholder="Your message. "
								         id="message" 
								         
								         rows="15"
								         cols="50"
								        >
								        </textarea>

								      </div>





								      <p className=' red pv4 dim  fw8' style={{ 'fontSize':'1.0rem'}}>* Fill in all details before sending.</p>

								     
								    </fieldset>
								    
										<ReCAPTCHA
											sitekey="6LegIIMcAAAAAOC219gt52xjBR1lzsdDDHTyzP4o"
											onChange={this.onReCaptureChange}
										/>
								     

                      <Button variant="contained"  
                      onClick ={this.onButtonSubmit}
                      type="submit" 
                      value="Send"
                      className='button-links-on-mobile ' 
                      style={{'backgroundColor':'black', 'color':'white', 'fontSize':'1.0rem', 'padding':'10px 30px 10px 30px', }} >
                      SEND
                      </Button>
								      
								    
								    
								  </div>
								</main>
							</article>
				
			    	   </div>
				


				    	    </div>

			    		</div>
			    	</div>


			    	
					</main>		


									




					






			
				
							
							<img className ='' src ={bottomBanner} alt=''/>
							<img className ='' src ={bottomBanner} alt=''/>
							<img className ='' src ={bottomBanner} alt=''/>
							<img className ='' src ={bottomBanner} alt=''/>
							
							
							
			
			
					</div>
		)
	}

}


export default Contact;