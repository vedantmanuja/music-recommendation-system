import Card from './Card';
import './styles/Genre.css';

function Genre() {
    
    return (
        <div className="genre">
    
            <Card
                image='https://youthincmag.com/wp-content/uploads/2020/07/Pin-Img.jpg'
                genre='Hip-Hop'
                Link='/genrepage/hiphop'
            />

            <Card
                image='https://youthincmag.com/wp-content/uploads/2020/07/Pin-Img.jpg'
                genre='Rap'
                Link='/genrepage/rap'
            />
            <Card
                image='https://youthincmag.com/wp-content/uploads/2020/07/Pin-Img.jpg'
                genre='Bollywood'
                Link='/genrepage/bollywood'
            />
            <Card
                image='https://youthincmag.com/wp-content/uploads/2020/07/Pin-Img.jpg'
                genre='Classic'
                Link='/genrepage/classic'
            />
             <Card
                image='https://youthincmag.com/wp-content/uploads/2020/07/Pin-Img.jpg'
                genre='Country'
                Link='/genrepage/country'
            />
             <Card
                image='https://youthincmag.com/wp-content/uploads/2020/07/Pin-Img.jpg'
                genre='Pop'
                Link='/genrepage/pop'
            />
            
            
        </div>
    )
    
}

export default Genre;