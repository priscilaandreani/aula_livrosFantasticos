export default function initScroll(){
  const sections = document.querySelectorAll('[data-anime="scroll"');
  if (sections.length){
    const scrollMiddle = window.innerHeight * 0.6;

    function animeScroll(){
      sections.forEach(section =>{
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - scrollMiddle) < 0;

        if (isSectionVisible){
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo')
        }
      })
    }

    animeScroll();

    window.addEventListener('scroll', animeScroll);
  }
}