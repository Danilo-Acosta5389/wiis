import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.section`
position: relative;
display: flex;
flex-direction: column;
text-shadow: 1px 1px 5px black;
height: 100vh;
width: 100vw;
z-index: 1;
& h1 {
  cursor: pointer;
}
`;




const wisTitle = "{What is Space}";

function Title() {
    return(
    <TitleContainer>
      <h1>{wisTitle}</h1>
    </TitleContainer>
    );
}

export default Title;




{/* <div class="page">
        <p data-scroll="in">{WhatisSpace}</p>
        <p class="reveal--2 words chars splitting" aria-hidden="true" data-scroll="in" data-splitting="" style="--word-total:3; --char-total:20;"><span class="word" data-word="What" style="--word-index:0;"><span class="char" data-char="{" style="--char-index:0; --count:1; --char-0:&quot;≥&quot;; --char-1:&quot;¶&quot;; --char-2:&quot;/&quot;; --char-3:&quot;˚&quot;; --char-4:&quot;░&quot;; --char-5:&quot;≤&quot;; --char-6:&quot;¢&quot;; --char-7:&quot;•&quot;; --char-8:&quot;≥&quot;; --char-9:&quot;˚&quot;;">{</span><span class="char" data-char="W" style="--char-index:0; --count:1; --char-0:&quot;≥&quot;; --char-1:&quot;¶&quot;; --char-2:&quot;/&quot;; --char-3:&quot;˚&quot;; --char-4:&quot;░&quot;; --char-5:&quot;≤&quot;; --char-6:&quot;¢&quot;; --char-7:&quot;•&quot;; --char-8:&quot;≥&quot;; --char-9:&quot;˚&quot;;">W</span><span class="char" data-char="h" style="--char-index:1; --count:3; --char-0:&quot;<&quot;; --char-1:&quot;…&quot;; --char-2:&quot;–&quot;; --char-3:&quot;`&quot;; --char-4:&quot;¶&quot;; --char-5:&quot;ƒ&quot;; --char-6:&quot;•&quot;; --char-7:&quot;?&quot;; --char-8:&quot;˜&quot;; --char-9:&quot;˜&quot;;">h</span><span class="char" data-char="a" style="--char-index:2; --count:1; --char-0:&quot;░&quot;; --char-1:&quot;æ&quot;; --char-2:&quot;≥&quot;; --char-3:&quot;å&quot;; --char-4:&quot;÷&quot;; --char-5:&quot;–&quot;; --char-6:&quot;∫&quot;; --char-7:&quot;µ&quot;; --char-8:&quot;å&quot;; --char-9:&quot;▒&quot;;">a</span><span class="char" data-char="t" style="--char-index:3; --count:4; --char-0:&quot;≈&quot;; --char-1:&quot;¬&quot;; --char-2:&quot;<&quot;; --char-3:&quot;…&quot;; --char-4:&quot;∞&quot;; --char-5:&quot;/&quot;; --char-6:&quot;?&quot;; --char-7:&quot;˙&quot;; --char-8:&quot;ß&quot;; --char-9:&quot;≈&quot;;">t</span><span class="word" data-word="iteration" style="--word-index:1;"><span class="char" data-char="i" style="--char-index:6; --count:3; --char-0:&quot;∆&quot;; --char-1:&quot;∂&quot;; --char-2:&quot;?&quot;; --char-3:&quot;¶&quot;; --char-4:&quot;░&quot;; --char-5:&quot;…&quot;; --char-6:&quot;`&quot;; --char-7:&quot;≤&quot;; --char-8:&quot;∆&quot;; --char-9:&quot;≠&quot;;">i</span><span class="char" data-char="s" style="--char-index:7; --count:5; --char-0:&quot;˚&quot;; --char-1:&quot;∂&quot;; --char-2:&quot;¶&quot;; --char-3:&quot;˚&quot;; --char-4:&quot;>&quot;; --char-5:&quot;•&quot;; --char-6:&quot;`&quot;; --char-7:&quot;`&quot;; --char-8:&quot;>&quot;; --char-9:&quot;░&quot;;">s</span><span class="whitespace"> </span><span class="word" data-word="count" style="--word-index:2;"><span class="char" data-char="S" style="--char-index:15; --count:2; --char-0:&quot;∞&quot;; --char-1:&quot;ç&quot;; --char-2:&quot;▓&quot;; --char-3:&quot;˚&quot;; --char-4:&quot;?&quot;; --char-5:&quot;∂&quot;; --char-6:&quot;/&quot;; --char-7:&quot;`&quot;; --char-8:&quot;£&quot;; --char-9:&quot;ß&quot;;">S</span><span class="char" data-char="p" style="--char-index:16; --count:3; --char-0:&quot;?&quot;; --char-1:&quot;>&quot;; --char-2:&quot;ç&quot;; --char-3:&quot;∞&quot;; --char-4:&quot;?&quot;; --char-5:&quot;…&quot;; --char-6:&quot;˙&quot;; --char-7:&quot;▒&quot;; --char-8:&quot;ç&quot;; --char-9:&quot;æ&quot;;">p</span><span class="char" data-char="a" style="--char-index:17; --count:5; --char-0:&quot;≠&quot;; --char-1:&quot;▒&quot;; --char-2:&quot;∫&quot;; --char-3:&quot;§&quot;; --char-4:&quot;∂&quot;; --char-5:&quot;©&quot;; --char-6:&quot;˙&quot;; --char-7:&quot;░&quot;; --char-8:&quot;<&quot;; --char-9:&quot;>&quot;;">a</span><span class="char" data-char="c" style="--char-index:18; --count:3; --char-0:&quot;∆&quot;; --char-1:&quot;¡&quot;; --char-2:&quot;¢&quot;; --char-3:&quot;<&quot;; --char-4:&quot;¡&quot;; --char-5:&quot;ª&quot;; --char-6:&quot;µ&quot;; --char-7:&quot;>&quot;; --char-8:&quot;¬&quot;; --char-9:&quot;˚&quot;;">c</span><span class="char" data-char="e" style="--char-index:19; --count:2; --char-0:&quot;∫&quot;; --char-1:&quot;¡&quot;; --char-2:&quot;–&quot;; --char-3:&quot;÷&quot;; --char-4:&quot;ß&quot;; --char-5:&quot;<&quot;; --char-6:&quot;√&quot;; --char-7:&quot;∫&quot;; --char-8:&quot;ƒ&quot;; --char-9:&quot;ß&quot;;">e</span><span class="char" data-char="}" style="--char-index:19; --count:2; --char-0:&quot;∫&quot;; --char-1:&quot;¡&quot;; --char-2:&quot;–&quot;; --char-3:&quot;÷&quot;; --char-4:&quot;ß&quot;; --char-5:&quot;<&quot;; --char-6:&quot;√&quot;; --char-7:&quot;∫&quot;; --char-8:&quot;ƒ&quot;; --char-9:&quot;ß&quot;;">}</span></span></p>
      </div> */}

//       *
//   box-sizing border-box
//   transition color .25s ease

// :root
//   --dark #111
//   --light #fefefe
//   --color var(--dark)
//   --bg var(--light)

//   @media (prefers-color-scheme: dark)
//     --color var(--light)
//     --bg var(--dark)

// body
//   background-color var(--bg)
//   display flex
//   align-items center
//   justify-content center
//   min-height 100vh
//   font-size 3.5rem
//   font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
//   font-weight bold

// p
//   max-width 300px

//   &[data-scroll='in']
//     [data-char]:after
//       animation-name glitch-switch

// .reveal--2 [data-char]:after
//   animation-iteration-count var(--count)

// p:nth-of-type(1)
//   position absolute
//   opacity 0

// .word
//   position relative
//   display inline-block

// [data-char]
//   color transparent
//   position relative

//   &:after
//     --txt attr(data-char)
//     animation-duration .2s
//     animation-delay .5s
//     animation-timing-function steps(1)
//     animation-fill-mode backwards
//     content var(--txt)
//     color var(--color)
//     position absolute
//     left 0
//     top 0

// @keyframes glitch-switch
//   0%
//     content var(--char-0)
//   10%
//     content var(--char-1)
//   20%
//     content var(--char-2)
//   30%
//     content var(--char-3)
//   40%
//     content var(--char-4)
//   50%
//     content var(--char-5)
//   60%
//     content var(--char-6)
//   70%
//     content var(--char-7)
//   80%
//     content var(--char-8)
//   90%
//     content var(--char-9)
//   100%
//     content var(--txt)

// /**
//  * Themeing
// */
// .page
//   align-items center
//   display flex
//   height 100vh
//   justify-content center
//   position relative
//   scroll-snap-align center
//   width 100vw

// .container
//   height 100vh
//   overflow auto
//   overflow-x hidden
//   scroll-snap-type y mandatory