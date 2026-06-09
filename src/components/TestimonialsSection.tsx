"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    index: 1,
    name: "Long (Peter) Tran",
    position: "Motion & Interaction Designer - Specialising in the UI/UX industry",
    image: "/images/testimonial-1.jpeg",
    content: "As a motion designer on his team, I've received tremendous support and inspiration from Valentin.\n\nOn any given day, if there was a UI sketch on a piece of paper, it belonged to Valentin. His deep knowledge of design is evident, and his work never fails to impress me. I've always been curious about what makes his work so distinct and beautiful. In my eyes, he is the finest designer on the team, known for his high-quality work (and his suits, of course).\n\nDespite his reserved nature, he's an excellent mentor with a kind heart. He's open about his failures and never brags about his successes. He always listens attentively and offers advice on not just my professional skills but also on interpersonal ones. His sense of humor keeps our conversations incredibly engaging. We've remained friends to this day.\n\nHaving Valentin on your team guarantees that it will be distinguished by great suits, a notable beard, and exceptional design work (some sense of humor too)."
  },
  {
    index: 2,
    name: "Chris Azzopardi",
    position: "Chief Product Officer",
    image: "/images/testimonial-2.jpeg",
    content: "I had the pleasure of working closely with Valentin at bitcoin.com.\nThroughout our time together, I was consistently impressed by their exceptional design skills, strategic thinking, and unwavering dedication to delivering exceptional user experiences.\n\nHe possesses a deep understanding of design principles and best practices, which they seamlessly apply to create user-centric and visually compelling interfaces. His ability to translate complex product requirements into intuitive and engaging designs is truly remarkable.\n\nWithout hesitation, I highly recommend Valentin for any design-related role. His unique blend of design expertise, strategic thinking, and collaborative spirit makes him an invaluable asset to any team. I am confident that he will continue to excel in his career and make significant contributions to the industry."
  },
  {
    index: 3,
    name: "Silvano D'Orazio",
    position: "Group Head of User Experience and Brand",
    image: "/images/testimonial-3.jpg",
    content: "As the Head of Design at Tyme Bank, I had the distinct pleasure of working closely with Valentin over the past few years.\n\nThroughout his tenure at Tyme Bank, Valentin has made significant contributions to a wide range of projects. He played a key role in developing our new mobile banking app, praised for its user-friendly design and intuitive functionality. Valentin was instrumental in creating our new internal branding guidelines, which have helped establish a more cohesive and consistent brand identity across all touchpoints.\n\nValentin has consistently demonstrated his ability to deliver exceptional results across a wide range of projects. He is passionate about creating products that not only meet user needs but also exceed their expectations, conducting user research and using insights from users to inform his design decisions.\nHis empathetic approach ensures that user needs are always at the forefront of his mind.\nIn addition to his user-centric approach, Valentin is a skilled UI designer. He has an innate ability to create visually appealing and aesthetically pleasing interfaces that are both engaging and intuitive.\n\nValentin's leadership skills are equally impressive. He can naturally motivate and inspire his team members, creating a positive and productive work environment. He is also a great listener, always willing to take feedback from his team and stakeholders. His versatility is one of his greatest strengths. With his deep understanding of the entire product development process, Valentin seamlessly collaborates with cross-functional teams and stakeholders.\n\nI wholeheartedly recommend Valentin for the position of Lead Product Designer. He is also a great leader and motivator, and he can create a positive and productive work environment. I am confident that Valentin would be a valuable asset to any organisation."
  },
  {
    index: 4,
    name: "Charles Mandin",
    position: "Senior PMO @ Nethermind",
    image: "/images/testimonial-4.jpeg",
    content: "Working with Valentin has always been a pleasure: he is focused and committed to excellence both in terms of quality and in terms of deadline. He showed a unique ability to be as much detail-oriented as taking an eagle's eye view on systems and products.\n\nHis ability to understand unique product challenges and meet them is outstanding, and he brought both vision and expertise during our multiple collaborations.\nHe is deeply proactive, and provides and receives feedback in a professional and constructive manner.\n\nI cannot recommend Valentin enough for a leading position in any UX endeavour, and should the need ever arise his profile would sit on top of my recruitment shortlist."
  },
  {
    index: 5,
    name: "Hai Van Tran",
    position: "Product Designer Lead",
    image: "/images/testimonial-5.jpeg",
    content: "Three things I could say about Valentin are focus, creativity and wisdom. His skillset and industry knowledge inspire those around him. He cuts through noise to focus on what matters. Valentin provides clear direction while ensuring the team is heard and comfortable. He smoothly steps up to lead when needed.\n\nHis calm demeanor encourages open sharing of ideas and constructive debate. Valentin fosters a collaborative environment where all can thrive. He maintains composure under pressure, driving results while mentoring teammates. Valentin motivates others through his committed work ethic.\n\nI highly recommend Valentin for any leadership role in financial services."
  },
  {
    index: 6,
    name: "Andrew Michael Todd",
    position: "Head Of Marketing and Growth at Bitcoin.com",
    image: "/images/testimonial-6.jpeg",
    content: "I am delighted to recommend Valentin, a former Lead Designer at Bitcoin.com. During his time with us Valentin showcased exceptional product design and leadership skills.\n\nIn his role, he oversaw the UI/UX and played a crucial part in feature development and enhancing product experiences. His expertise with design tools like Figma, Sketch, and Adobe greatly contributed to the seamless execution of design phases from start to finish.\n\nValentin led the design for a new casino project, showcasing his ability to handle complex tasks from concept to completion. His skill in collaborating across various departments and effectively incorporating feedback into designs was impressive.\n\nBeyond his technical skills, Valentin demonstrated strong teamwork, communication, and problem-solving abilities. He showed a consistent drive for improvement, seeking feedback to refine his work and processes.\n\nValentin's approach to teamwork and mentorship was noteworthy, guiding junior designers with clarity. His dedication to his craft and his leadership qualities have set him apart as a professional in design.\n\nValentin stands out as a top-tier professional in design and leadership. His blend of expertise, dedication, and vision make him an invaluable asset. I wholeheartedly recommend Valentin for any senior design or leadership role."
  },
  {
    index: 7,
    name: "Jay Mehta",
    position: "Marketing & Content Strategy Lead | Web3, DeFi, iGaming | Ex-Bitcoin.com, FinTech Advisor",
    image: "/images/testimonial-7.jpeg",
    content: "I've had the chance to be Valentin's direct manager at Bitcoin.com - and I can not recommend him enough for any creative position he aspires to!\n\nValentin is a highly creative individual who has an outstanding ability to materialize unique design solutions with an innovative touch. He understands art styles and contextual styling like only a few others can. If rendering top-notch designs is his jackhammer, developing the backbone for UX with clean information architecture and wireframing for possible design solutions are his chisel and rake.\n\nHis ability to carve out elegant and functional designs is reminiscent of a skilled artisan, chiseling away excess to reveal the essence of user experience. Ever so proactive, Valentin is on the top of his game when it comes to developing and delivering product design solutions.\n\nValentin is a star, I'd work with him again in a heartbeat!"
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleNext = () => {
    if (activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const currentX = e.touches[0].clientX
    const diffX = touchStartX - currentX

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handleNext()
      } else {
        handlePrev()
      }
      setTouchStartX(null)
    }
  }

  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <div className="home__testi-wrap">
      <section className="home__testi">
        <div className="container">
          <h2 className="home__testi-title grid">
            <span className="heading h2 upper fw-bold home__testi-title-txt">What</span>
            <span className="heading h2 upper fw-bold home__testi-title-txt">people say</span>
            <span className="heading h2 upper fw-bold home__testi-title-txt">
              About<span className="cl-txt-title"> me</span>
            </span>
            <span className="fs-20 fw-reg home__testi-title-label">(Testimonials)</span>
          </h2>

          <div 
            className="home__testi-listing" 
            style={{ "--itemLength": testimonials.length } as React.CSSProperties}
          >
            <div className="home__testi-listing-inner">
              
              {/* Pagination Controls visible on mobile/tablet */}
              <div className="home__testi-control">
                <div className="fw-med home__testi-pagination">
                  <span className="cl-txt-title home__testi-pagination-txt">{pad(activeIndex + 1)} </span>
                  <span className="cl-txt-desc">/ {pad(testimonials.length)}</span>
                </div>
                <div className="home__testi-navigation">
                  <div 
                    className={cn("home__testi-navigation-arrow prev", activeIndex === 0 && "disable")}
                    onClick={handlePrev}
                  >
                    <div className="ic ic-20">
                      <svg width="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.6 8.00003H14M6.19998 3.80005L2 8.00003L6.19998 12.2" stroke="currentColor" strokeWidth="1.13137" strokeMiterlimit="10" strokeLinecap="square"></path>
                      </svg>
                    </div>
                  </div>
                  <div 
                    className={cn("home__testi-navigation-arrow next", activeIndex === testimonials.length - 1 && "disable")}
                    onClick={handleNext}
                  >
                    <div className="ic ic-20">
                      <svg width="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.4 8.00003H2M9.79997 3.80005L14 8.00003L9.79997 12.2" stroke="currentColor" strokeWidth="1.13137" stroke-miterlimit="10" stroke-linecap="square"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="line home__testi-pagination-progress">
                  <div 
                    className="home__testi-pagination-progress-inner"
                    style={{ 
                      width: `${100 / testimonials.length}%`,
                      transform: `translateX(${activeIndex * 100}%)`,
                      transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
                    }}
                  />
                </div>
              </div>

              {/* Listing Content wrapper with mobile translation */}
              <div 
                className="home__testi-listing-inner-wrapper"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                style={isMobile ? {
                  transform: `translateX(-${activeIndex * 100}%)`,
                  display: "flex",
                  transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
                } : {}}
              >
                {testimonials.map((t, idx) => (
                  <div
                    key={t.index}
                    className={cn("home__testi-item", idx === activeIndex && "active")}
                    onMouseEnter={() => setActiveIndex(idx)}
                  >
                    <div className="home__testi-item-content grid">
                      <span className="line" />
                      <p className="heading h4 cl-txt-disable home__testi-item-order">{pad(t.index)}.</p>
                      
                      <div className="home__testi-item-info">
                        <p className="fs-24 fw-med cl-txt-title home__testi-item-name">{t.name}</p>
                        <p className="cl-txt-sub home__testi-item-position">{t.position}</p>
                      </div>

                      <div className="fs-24 fw-thin home__testi-item-feedback-wrap">
                        <div className="home__testi-item-feedback shorten">
                          <div className="home__testi-item-feedback-txt">
                            {t.content.split("\n\n").map((para, pIdx) => (
                              <span key={pIdx}>
                                {para}
                                {pIdx < t.content.split("\n\n").length - 1 && <><br /><br /></>}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="home__testi-item-feedback fully">
                          <div className="home__testi-item-feedback-txt">
                            {t.content.split("\n\n").map((para, pIdx) => (
                              <span key={pIdx}>
                                {para}
                                {pIdx < t.content.split("\n\n").length - 1 && <><br /><br /></>}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button type="button" className="home__testi-item-toggle">
                        <span className="fw-med txt-link">Read more</span>
                        <span className="fw-med"></span>
                      </button>

                      <div className="home__testi-item-image">
                        <img 
                          src={t.image} 
                          alt={t.name} 
                          className="img img-fill home__testi-item-image-main"
                          loading="lazy" 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
