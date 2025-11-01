import React,{useState} from 'react';
import { Link,  } from 'react-router-dom';
import { PaystackButton } from "paystack-react";


const LessonCard = ({ lesson, dashboardView = false }) => {
 const publicKey = "pk_test_162884f06e28545f737d29fe112e0fd09da43cac"; // your public key
  const amount = 5000 * 100; // amount in kobo (₦5000)
  const [email, setEmail] = useState("suleiman20015kaita@gmai.com");
  const [name, setName] = useState("suleiman");
  const [modal, setmodal] = useState(false);

  
  const componentProps = {
      email,
      amount,
      metadata: {
        name,
      },
      publicKey,
      text: "Buy",
      onSuccess: (response) => {
        alert(`Payment Successful! Reference: ${response.reference}`);
        console.log("Success response:", response);
      },
      onClose: () => alert("Payment closed"),
    };

    

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={lesson.image || 'https://via.placeholder.com/600x400'} 
          alt={lesson.title} 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{lesson.title}</h3>
        <p className="text-sm text-gray-600 mb-4">Tutor: <span className="font-medium text-indigo-600">{lesson.tutor}</span></p>
        
        {dashboardView ? (
          /* Dashboard View: Progress and Action */
          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="mb-2 flex justify-between items-center text-sm font-medium">
              <p className="text-gray-700">Progress:</p>
              <p className="text-indigo-600">{lesson.progress ? `${lesson.progress}% Complete` : lesson.format}</p>
            </div>
            {lesson.progress !== null && (
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${lesson.progress || 0}%` }}
                  ></div>
                </div>
            )}
            <Link to={`/my-dashboard/${lesson.id}`} className={'w-full h-full justify-center items-center'}>
            <button className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200">
              {lesson.format === 'online' ? 'Continue Lesson' : 'View Schedule'}
            </button>
            </Link>
          </div>
        ) : (
          /* General Catalog View: Price and Buttons */
          <div className="mt-auto pt-4 border-t border-gray-100">
            <p className="text-2xl font-bold text-gray-900 mb-4"> ₦{lesson.price}</p>
            <div className="flex space-x-3">
              <Link className='justify-center items-center flex-1 py-2 text-indigo-600 border border-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition duration-200' to={`/lessons/${lesson.id}`}>
              <button className='w-full'>
                Details
              </button>
              </Link>
              <button onClick={()=>setmodal(prv=>!prv)} className="flex-1 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200">
                {/* Buy Now */}
                <PaystackButton {
                  ...{
                      email,
      amount:Number(lesson?.price*100),
      metadata: {
        name,
      },
      publicKey,
      text: "Buy",
      onSuccess: (response) => {
        alert(`Payment Successful! Reference: ${response.reference}`);
        console.log("Success response:", response);
      },
      onClose: () => alert("Payment closed"),
                  }
                } className="paystack-button" />
              </button>
            </div>
          </div>
        )}
      </div>
      {/* {modal&&      <PaystackButton {...componentProps} className="paystack-button" /> */}
      {/* } */}
      
    </div>
  );
};

export default LessonCard;