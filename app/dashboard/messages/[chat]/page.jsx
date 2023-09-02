import Chat from '../../../../Components/Chat/Chat';

const chat = () => {
  return (
    <section className='chat mt-4'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 my-1">
            <h2 className='fontMedium mb-4 color_primary'>تحدث معي البائع مباشر</h2>
            <Chat />
          </div>
        </div>
      </div>
    </section>
  )
};

export default chat;
