import React from 'react'

function Fundcard() {
  return (
    <div>

        {/* <div className="flex flex-wrap justify-center">
        <div className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer m-2">
        <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"/>

        <div className="flex flex-col p-4">
            <div className="flex flex-row items-center mb-[18px]">
            <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="tag" className="w-[17px] h-[17px] object-contain"/>
            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">Education</p>
            </div>

            <div className="block">
            <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">title</h3>
            <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">description</p>
            </div>

            <div className="flex justify-between flex-wrap mt-[15px] gap-2">
            <div className="flex flex-col">
                <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">amountCollected</h4>
                <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Raised of target</p>
            </div>
            <div className="flex flex-col">
                <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">remainingDays</h4>
                <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left</p>
            </div>
            </div>

            <div className="flex items-center mt-[20px] gap-[12px]">
            <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
                <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="user" className="w-1/2 h-1/2 object-contain"/>
            </div>
            <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">owner</span></p>
            </div>
        </div>
        </div>

        <div className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer m-2">
        <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"/>

        <div className="flex flex-col p-4">
            <div className="flex flex-row items-center mb-[18px]">
            <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="tag" className="w-[17px] h-[17px] object-contain"/>
            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">Education</p>
            </div>

            <div className="block">
            <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">title</h3>
            <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">description</p>
            </div>

            <div className="flex justify-between flex-wrap mt-[15px] gap-2">
            <div className="flex flex-col">
                <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">amountCollected</h4>
                <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Raised of target</p>
            </div>
            <div className="flex flex-col">
                <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">remainingDays</h4>
                <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left</p>
            </div>
            </div>

            <div className="flex items-center mt-[20px] gap-[12px]">
            <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
                <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="user" className="w-1/2 h-1/2 object-contain"/>
            </div>
            <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">owner</span></p>
            </div>
        </div>
        </div>

        <div className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer m-2">
        <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"/>

        <div className="flex flex-col p-4">
            <div className="flex flex-row items-center mb-[18px]">
            <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="tag" className="w-[17px] h-[17px] object-contain"/>
            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">Education</p>
            </div>

            <div className="block">
            <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">title</h3>
            <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">description</p>
            </div>

            <div className="flex justify-between flex-wrap mt-[15px] gap-2">
            <div className="flex flex-col">
                <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">amountCollected</h4>
                <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Raised of target</p>
            </div>
            <div className="flex flex-col">
                <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">remainingDays</h4>
                <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left</p>
            </div>
            </div>

            <div className="flex items-center mt-[20px] gap-[12px]">
            <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
                <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="user" className="w-1/2 h-1/2 object-contain"/>
            </div>
            <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">owner</span></p>
            </div>
        </div>
        </div>

        <div className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer m-2">
        <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"/>

        <div className="flex flex-col p-4">
            <div className="flex flex-row items-center mb-[18px]">
            <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="tag" className="w-[17px] h-[17px] object-contain"/>
            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">Education</p>
            </div>

            <div className="block">
            <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">title</h3>
            <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">description</p>
            </div>

            <div className="flex justify-between flex-wrap mt-[15px] gap-2">
            <div className="flex flex-col">
                <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">amountCollected</h4>
                <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Raised of target</p>
            </div>
            <div className="flex flex-col">
                <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">remainingDays</h4>
                <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left</p>
            </div>
            </div>

            <div className="flex items-center mt-[20px] gap-[12px]">
            <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
                <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="user" className="w-1/2 h-1/2 object-contain"/>
            </div>
            <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">owner</span></p>
            </div>
        </div>
        </div>
        </div> */}

        <div className="flex justify-center">
        <div className="flex sm:flex-row flex-col">
            {/* Card 1 */}
            <div className="sm:w-[288px] w-full rounded-[15px] bg-gray-800 cursor-pointer m-2">
                <img src='https://th-i.thgim.com/public/news/national/nsjgfk/article66324993.ece/alternates/FREE_1200/iStock-1372750134.jpg' alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"/>
                <div className="flex flex-col p-4">
                        <div className="flex flex-row items-center mb-[18px]">
                            <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="tag" className="w-[17px] h-[17px] object-contain"/>
                            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-gray-400">Education</p>
                        </div>
                        <div className="block">
                            <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">title</h3>
                            <p className="mt-[5px] font-epilogue font-normal text-gray-400 text-left leading-[18px] truncate">description</p>
                        </div>
                    <div className="flex justify-between flex-wrap mt-[15px] gap-2">
                        <div className="flex flex-col">
                            <h4 className="font-epilogue font-semibold text-[14px] text-gray-400 leading-[22px]">amountCollected</h4>
                            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-gray-400 sm:max-w-[120px] truncate">Raised of target</p>
                        </div>  
                        <div className="flex flex-col">
                            <h4 className="font-epilogue font-semibold text-[14px] text-gray-400 leading-[22px]">remainingDays</h4>
                            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-gray-400 sm:max-w-[120px] truncate">Days Left</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-[20px] gap-[12px]">
                        <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-700">
                            <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="user" className="w-1/2 h-1/2 object-contain"/>
                        </div>
                        <p className="flex-1 font-epilogue font-normal text-[12px] text-gray-400 truncate">by <span className="text-gray-400">owner</span></p>
                    </div>
                </div>
            </div>
            {/* Repeat the above code for Card 2, Card 3, and Card 4 */}
            {/* Card 2 */}
            <div className="sm:w-[288px] w-full rounded-[15px] bg-gray-800 cursor-pointer m-2">
            <img src='https://lh6.googleusercontent.com/W-cUPi5kwtk7lSHNAyFsPi0XorL797-OOIz3P1QjJooh2RtY6KXImV__1w47ZwnybwFpclrHYtG8PnGtS4lgrzG8xuiYbToTEiv48w5w79Z_f06BPpkhxQ0m8xv_rqC9FGF1X1FFM-dRUZiN4g' alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"/>
                <div className="flex flex-col p-4">
                        <div className="flex flex-row items-center mb-[18px]">
                            <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="tag" className="w-[17px] h-[17px] object-contain"/>
                            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-gray-400">Education</p>
                        </div>
                        <div className="block">
                            <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">title</h3>
                            <p className="mt-[5px] font-epilogue font-normal text-gray-400 text-left leading-[18px] truncate">description</p>
                        </div>
                    <div className="flex justify-between flex-wrap mt-[15px] gap-2">
                        <div className="flex flex-col">
                            <h4 className="font-epilogue font-semibold text-[14px] text-gray-400 leading-[22px]">amountCollected</h4>
                            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-gray-400 sm:max-w-[120px] truncate">Raised of target</p>
                        </div>  
                        <div className="flex flex-col">
                            <h4 className="font-epilogue font-semibold text-[14px] text-gray-400 leading-[22px]">remainingDays</h4>
                            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-gray-400 sm:max-w-[120px] truncate">Days Left</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-[20px] gap-[12px]">
                        <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-700">
                            <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="user" className="w-1/2 h-1/2 object-contain"/>
                        </div>
                        <p className="flex-1 font-epilogue font-normal text-[12px] text-gray-400 truncate">by <span className="text-gray-400">owner</span></p>
                    </div>
                </div>
            
            </div>
            {/* Card 3 */}
            <div className="sm:w-[288px] w-full rounded-[15px] bg-gray-800 cursor-pointer m-2">
            <img src='https://pbs.twimg.com/media/F9RnlrvW4AEcAXz.jpg' alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"/>
                <div className="flex flex-col p-4">
                        <div className="flex flex-row items-center mb-[18px]">
                            <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="tag" className="w-[17px] h-[17px] object-contain"/>
                            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-gray-400">Education</p>
                        </div>
                        <div className="block">
                            <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">title</h3>
                            <p className="mt-[5px] font-epilogue font-normal text-gray-400 text-left leading-[18px] truncate">description</p>
                        </div>
                    <div className="flex justify-between flex-wrap mt-[15px] gap-2">
                        <div className="flex flex-col">
                            <h4 className="font-epilogue font-semibold text-[14px] text-gray-400 leading-[22px]">amountCollected</h4>
                            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-gray-400 sm:max-w-[120px] truncate">Raised of target</p>
                        </div>  
                        <div className="flex flex-col">
                            <h4 className="font-epilogue font-semibold text-[14px] text-gray-400 leading-[22px]">remainingDays</h4>
                            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-gray-400 sm:max-w-[120px] truncate">Days Left</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-[20px] gap-[12px]">
                        <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-700">
                            <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="user" className="w-1/2 h-1/2 object-contain"/>
                        </div>
                        <p className="flex-1 font-epilogue font-normal text-[12px] text-gray-400 truncate">by <span className="text-gray-400">owner</span></p>
                    </div>
                </div>
            </div>
            {/* Card 4 */}
            <div className="sm:w-[288px] w-full rounded-[15px] bg-gray-800 cursor-pointer m-2">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XnRU11g6RAdU4YlEpdn0DA6LTg3T0vZfd8B8bSNXPQ&s' alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"/>
                <div className="flex flex-col p-4">
                        <div className="flex flex-row items-center mb-[18px]">
                            <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="tag" className="w-[17px] h-[17px] object-contain"/>
                            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-gray-400">Education</p>
                        </div>
                        <div className="block">
                            <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">title</h3>
                            <p className="mt-[5px] font-epilogue font-normal text-gray-400 text-left leading-[18px] truncate">description</p>
                        </div>
                    <div className="flex justify-between flex-wrap mt-[15px] gap-2">
                        <div className="flex flex-col">
                            <h4 className="font-epilogue font-semibold text-[14px] text-gray-400 leading-[22px]">amountCollected</h4>
                            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-gray-400 sm:max-w-[120px] truncate">Raised of target</p>
                        </div>  
                        <div className="flex flex-col">
                            <h4 className="font-epilogue font-semibold text-[14px] text-gray-400 leading-[22px]">remainingDays</h4>
                            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-gray-400 sm:max-w-[120px] truncate">Days Left</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-[20px] gap-[12px]">
                        <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-700">
                            <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/S3ODTTWSMFCFTJZD3K5K5OX5HI.png' alt="user" className="w-1/2 h-1/2 object-contain"/>
                        </div>
                        <p className="flex-1 font-epilogue font-normal text-[12px] text-gray-400 truncate">by <span className="text-gray-400">owner</span></p>
                    </div>
                </div>
            </div>
        </div>
        </div>

</div>




      
      

    
            
    
    
    
  )
}

export default Fundcard
