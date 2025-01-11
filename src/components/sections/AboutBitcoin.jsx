import React from 'react';

const AboutBitcoin = () => {
    return (
        <div className="bg-white p-6 rounded-lg mb-6">
            <h2 className="text-xl font-bold mb-6">About Bitcoin</h2>

            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold mb-2">What is Bitcoin?</h3>
                    <div className="space-y-4 text-gray-600">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Assumenda cumque debitis esse fugiat ipsum iusto nostrum optio quaerat, quas quod rerum, tempore veritatis voluptate! Eius eveniet harum nulla omnis quis?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accusantium aut consequuntur dolore doloribus dolorum enim excepturi facere facilis hic inventore minima, mollitia, natus nulla officia optio perferendis possimus praesentium quasi quibusdam repudiandae sapiente aut suscipit tenetur?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aperia asperiatur atque consequuntur dolores enim error nobis placeat provident recusandae velit? Ad animi aperiam autem beatae commodi consectetur corporis dolectus earum ex harum id laborum magni.
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Already holding Bitcoin?</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-xl text-white">
                            <div className="flex justify-between items-start mb-4">
                                <img
                                    src="/api/placeholder/160/80"
                                    alt="Calculate profits"
                                    className="w-40 h-20 object-cover"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Calculate your profits and loss</h4>
                            <button className="bg-white text-black px-4 py-2 rounded-lg font-medium mt-2">
                                Check Now →
                            </button>
                        </div>

                        <div className="bg-gradient-to-r from-orange-400 to-red-500 p-4 rounded-xl text-white">
                            <div className="flex justify-between items-start mb-4">
                                <img
                                    src="/api/placeholder/160/80"
                                    alt="Calculate tax"
                                    className="w-40 h-20 object-cover"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Calculate your tax liability</h4>
                            <button className="bg-white text-black px-4 py-2 rounded-lg font-medium mt-2">
                                Check Now →
                            </button>
                        </div>
                    </div>
                    <p className="text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, aut debitis earum exercitationem impedit, libero molestiae numquam odit possimus quidem quod similique sint tempore, vero voluptate.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutBitcoin;