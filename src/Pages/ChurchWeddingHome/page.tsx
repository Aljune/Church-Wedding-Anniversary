import { useState } from "react";

import { Button, Card, Dialog, DialogContent, DialogTitle, IconButton, Stack } from "@mui/material";
import { Heart, Play, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import churchAnniversaryVideo from '../../assets/videos/aljuneandmerry2.mp4';
import Banner from '../../assets/images/banner/wed-bg.png';
import cw1 from '../../assets/images/church-wedding/1.jpg';
import cw2 from '../../assets/images/church-wedding/2.jpg';
import cw3 from '../../assets/images/church-wedding/3.jpg';
import cw4 from '../../assets/images/church-wedding/4.jpg';
import cw5 from '../../assets/images/church-wedding/5.jpg';
import cw6 from '../../assets/images/church-wedding/6.jpg';
import cw7 from '../../assets/images/church-wedding/7.jpg';
import cw8 from '../../assets/images/church-wedding/8.jpg';
import cw9 from '../../assets/images/church-wedding/9.jpg';
import cw10 from '../../assets/images/church-wedding/10.jpg';
import cw11 from '../../assets/images/church-wedding/11.jpg';
import cw12 from '../../assets/images/church-wedding/12.jpg';
import cw13 from '../../assets/images/church-wedding/13.jpg';
import cw14 from '../../assets/images/church-wedding/14.jpg';
import cw15 from '../../assets/images/church-wedding/15.jpg';
import cw16 from '../../assets/images/church-wedding/16.jpg';
import cw17 from '../../assets/images/church-wedding/17.jpg';
import cw18 from '../../assets/images/church-wedding/18.jpg';
import cw19 from '../../assets/images/church-wedding/19.jpg';
import cw20 from '../../assets/images/church-wedding/20.png';
import cw21 from '../../assets/images/church-wedding/21.png';
import cw22 from '../../assets/images/church-wedding/22.png';
import cw23 from '../../assets/images/church-wedding/23.png';
import cw24 from '../../assets/images/church-wedding/24.png';

const ChurchWeddingAnnersary = () => {
    const [showGallery, setShowGallery] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    // Sample gallery images - replace with your actual photos
    const galleryImages = [
        { id: 1, src: cw1, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 2, src: cw2, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 3, src: cw3, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 4, src: cw4, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 5, src: cw5, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 6, src: cw6, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 7, src: cw7, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 8, src: cw8, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 9, src: cw9, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 10, src: cw10, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 11, src: cw11, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 12, src: cw12, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 13, src: cw13, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 14, src: cw14, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 15, src: cw15, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 16, src: cw16, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 17, src: cw17, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 18, src: cw18, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 19, src: cw19, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 20, src: cw20, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 21, src: cw21, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 22, src: cw22, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 23, src: cw23, alt: "Church Wedding Day", category: "Church Wedding" },
        { id: 24, src: cw24, alt: "Church Wedding Day", category: "Church Wedding" },
    ];

    const openImageModal = (index: number) => {
        setSelectedImageIndex(index);
    };

    const closeImageModal = () => {
        setSelectedImageIndex(null);
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (selectedImageIndex === null) return;

        if (direction === 'prev') {
            setSelectedImageIndex(selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1);
        } else {
            setSelectedImageIndex(selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1);
        }
    };

    if (showGallery) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8 animate-fade-in">
                        <Button
                            onClick={() => setShowGallery(false)}
                            variant="outlined"
                            className="mb-6 hover:bg-rose-100 transition-all duration-300"
                        >
                            ← Back to Video
                        </Button>
                        <h1 className="text-4xl md:text-6xl font-serif text-rose-800 mb-4">
                            Our Beautiful Journey
                        </h1>
                        <div className="flex justify-center items-center gap-2 text-rose-600">
                            <Heart className="w-6 h-6 fill-current animate-pulse" />
                            <p className="text-lg">Cherished Memories Together</p>
                            <Heart className="w-6 h-6 fill-current animate-pulse" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {galleryImages.map((image, index) => (
                            <Card
                                key={image.id}
                                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm cursor-pointer"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animation: `fade-in 0.6s ease-out forwards ${index * 100}ms`
                                }}
                                onClick={() => openImageModal(index)}
                            >
                                <div className="relative aspect-square overflow-hidden">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <p className="font-semibold text-lg">{image.alt}</p>
                                            <p className="text-sm opacity-90">{image.category}</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Heart className="w-6 h-6 text-white fill-current" />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Image Modal */}
                    <Dialog open={selectedImageIndex !== null} onChange={closeImageModal}>
                        <DialogContent className="max-w-7xl max-h-[90vh] p-0 bg-black/95 border-0">
                            <DialogTitle className="sr-only text-black">
                                {selectedImageIndex !== null ? galleryImages[selectedImageIndex].alt : ""}
                            </DialogTitle>
                            {selectedImageIndex !== null && (

                                <>
                                    <div>
                                        {/* Close button */}
                                        <Button
                                            onClick={closeImageModal}
                                            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
                                        >
                                            <X className="w-6 h-6" />
                                        </Button>
                                    </div>
                                    {/* Previous button */}
                                    <Stack direction="row" spacing={0} sx={{ alignItems: 'center', justifyContent: 'space-around' }}>
                                        <IconButton
                                            aria-label="delete"
                                            size="small"
                                            onClick={() => navigateImage('prev')}
                                            className=" left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full"
                                        >
                                            <ChevronLeft className="w-8 h-8" />
                                        </IconButton>

                                        {/* Next button */}
                                        <IconButton
                                            aria-label="delete"
                                            size="small"
                                            onClick={() => navigateImage('next')}
                                            className=" right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full"
                                        >
                                            <ChevronRight className="w-8 h-8" />
                                        </IconButton>
                                    </Stack>
                                    {/* Main image */}
                                    <div className="w-full h-full flex items-center justify-center ">
                                        <img
                                            src={galleryImages[selectedImageIndex].src}
                                            alt={galleryImages[selectedImageIndex].alt}
                                            className="max-w-full max-h-full object-contain rounded-lg"
                                        />
                                    </div>

                                    {/* Image info */}
                                    <div className="absolute bottom-4 left-0 text-black bg-black opacity-50 w-full p-2">
                                        <h3 className="text-xl font-semibold mb-1 text-white">
                                            {galleryImages[selectedImageIndex].alt}
                                        </h3>
                                        <p className="text-sm opacity-80 text-white">
                                            {galleryImages[selectedImageIndex].category}
                                        </p>
                                        <p className="text-xs opacity-60 mt-1 text-white">
                                            {selectedImageIndex + 1} of {galleryImages.length}
                                        </p>
                                    </div>
                                </>
                            )}
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="animate-fade-in">
                    <div className="flex justify-center items-center gap-4 mb-6">
                        <Heart className="w-8 h-8 text-rose-500 fill-current animate-pulse" />
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif text-rose-800">
                            Our 1st Church Wedding Anniversary
                        </h1>
                        <Heart className="w-8 h-8 text-rose-500 fill-current animate-pulse" />
                    </div>

                    <p className="text-xl md:text-2xl text-rose-600 font-light mb-8">
                        Celebrating another beautiful year together
                    </p>
                </div>

                <Card className="relative overflow-hidden border-0 shadow-2xl bg-white/90 backdrop-blur-sm animate-scale-in">
                    <div className="aspect-video bg-black rounded-lg overflow-hidden relative group">
                        {/* Video placeholder - replace with your actual video */}
                        <video
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                            poster={cw7}
                        >
                            <source src={churchAnniversaryVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="w-full h-full bg-gradient-to-br from-rose-200 via-pink-200 to-purple-200 flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <Play className=" w-20 h-20 text-white mx-auto drop-shadow-lg" />
                                <p className="text-white text-lg font-semibold drop-shadow-lg">
                                    Our Anniversary Video
                                </p>
                                <p className="text-white/90 drop-shadow-lg">
                                    Click to play our special memories
                                </p>
                            </div>
                        </div>

                        {/* Video overlay for actual implementation */}
                        {/* Uncomment and replace with your video URL:
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/path-to-your-video-thumbnail.jpg"
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            */}
                    </div>
                </Card>

                <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                    <Button
                        onClick={() => setShowGallery(true)}
                        size="large"
                        className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                    >
                        <span className="mr-2 text-white">View Our Memories</span>
                        <ArrowRight className="text-white w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>

                    <p className="text-rose-500 mt-4 text-sm animate-pulse">
                        ✨ Click to explore our beautiful journey together ✨
                    </p>
                </div>

                <div className="absolute top-10 left-10 animate-pulse opacity-20">
                    <Heart className="w-12 h-12 text-rose-300 fill-current" />
                </div>
                <div className="absolute top-32 right-16 animate-pulse opacity-20" style={{ animationDelay: "1s" }}>
                    <Heart className="w-8 h-8 text-pink-300 fill-current" />
                </div>
                <div className="absolute bottom-20 left-20 animate-pulse opacity-20" style={{ animationDelay: "2s" }}>
                    <Heart className="w-6 h-6 text-purple-300 fill-current" />
                </div>
                <div className="absolute bottom-32 right-12 animate-pulse opacity-20" style={{ animationDelay: "1.5s" }}>
                    <Heart className="w-10 h-10 text-rose-300 fill-current" />
                </div>
            </div>
        </div>
    );
};

export default ChurchWeddingAnnersary;