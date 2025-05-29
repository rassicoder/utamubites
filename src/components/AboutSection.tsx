import React from 'react';
import { Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">About SHUKA-BITES</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            Discover the passion and tradition behind our delicious Andazi bites
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-amber-200 absolute -top-4 -left-4 w-full h-full rounded-lg"></div>
            <img 
              src="/images/maandalizi1.jpg"
              alt="SHUKU-BITES Bakers" 
              className="rounded-lg shadow-xl relative z-10 w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">Our Story</h3>
            <p className="text-amber-700 mb-6">
            Kila kitu kilianza na mapenzi safi kwa sanaa ya upishi na hamu ya kupata kitafunwa kilicho bora kabisa. Kumbukumbu tamu za maandazi yaliyopikwa nyumbani ndizo zilizochochea kuzaliwa kwa SHUKA-BITES. Tunajivunia kuwapa wateja wetu maandazi yaliyoandaliwa kwa ustadi na ladha isiyoweza kulinganishwa, na hivyo kufanya kila mtafuno kuwa uzoefu wa kufurahisha na wa kukumbukwa."
            </p>
            <p className="text-amber-700 mb-8">
              

"Hata leo, tunaendeleza kujitolea sawa kwa viungo bora na mbinu za asili, huku tukibuni ladha za kusisimua zinazovutia ladha za kisasa. Kila andazi linatengenezwa kwa mikono kwa upendo na uangalifu, kuhakikisha kwamba kila mtafuno unatoa uzoefu halisi ambao tunajulikana kwao."
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Users size={24} className="text-amber-600 mr-3" />
                <h4 className="text-xl font-medium text-amber-800">Meet Our Bakers</h4>
              </div>
              <p className="text-amber-700">
              "Timu yetu ndogo ya wapishi mahiri huamka alfajiri kila siku kuandaa maandazi mapya kwa kutumia mbinu za asili zilizorithiwa kutoka kizazi hadi kizazi. Chini ya uongozi wa mwokaji wetu mkuu, G@s FLUID De SHUKA, tunajivunia kuhifadhi ladha halisi huku tukiunda aina mpya na za kibunifu."

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;