import React, { Component } from 'react';

import { Answer } from '../answer/Answer';

import './Answers.css';

export class Answers extends Component {
  render() {
    const AnswersData = [
      {
        title: "What can a hot air fryer do what my oven can not do?",
        viewCount: 785,
        askedBy: 'Valþór',
        answer: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse in est ante in. Blandit cursus risus at ultrices mi tempus. Sed vulputate odio ut enim blandit volutpat. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sed sed risus pretium quam vulputate dignissim. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Eget arcu dictum varius duis at consectetur lorem donec massa. Vitae justo eget magna fermentum iaculis. Vitae auctor eu augue ut lectus arcu bibendum at varius. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Bibendum arcu vitae elementum curabitur vitae nunc sed. Sed turpis tincidunt id aliquet risus feugiat in ante. Mi proin sed libero enim sed faucibus turpis. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Mauris cursus mattis molestie a iaculis at.',
                 'Id faucibus nisl tincidunt eget nullam non. Accumsan in nisl nisi scelerisque eu. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Eget arcu dictum varius duis at consectetur. Diam quam nulla porttitor massa id neque. Tempus urna et pharetra pharetra massa massa ultricies. At varius vel pharetra vel. Sed felis eget velit aliquet sagittis id consectetur purus ut. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Urna nec tincidunt praesent semper feugiat nibh sed. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Magna ac placerat vestibulum lectus mauris ultrices eros in. Fusce id velit ut tortor pretium viverra suspendisse potenti. Commodo quis imperdiet massa tincidunt. Dignissim suspendisse in est ante in nibh mauris cursus. Aenean euismod elementum nisi quis eleifend quam. Nec ullamcorper sit amet risus nullam eget felis. Mattis vulputate enim nulla aliquet porttitor lacus.']
      }, 
      {
        title: "Houshold resolution professional wanted",
        viewCount: 234,
        askedBy: 'Valdimar',
        answer: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse in est ante in. Blandit cursus risus at ultrices mi tempus. Sed vulputate odio ut enim blandit volutpat. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sed sed risus pretium quam vulputate dignissim. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Eget arcu dictum varius duis at consectetur lorem donec massa. Vitae justo eget magna fermentum iaculis. Vitae auctor eu augue ut lectus arcu bibendum at varius. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Bibendum arcu vitae elementum curabitur vitae nunc sed. Sed turpis tincidunt id aliquet risus feugiat in ante. Mi proin sed libero enim sed faucibus turpis. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Mauris cursus mattis molestie a iaculis at.',
                 'Id faucibus nisl tincidunt eget nullam non. Accumsan in nisl nisi scelerisque eu. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Eget arcu dictum varius duis at consectetur. Diam quam nulla porttitor massa id neque. Tempus urna et pharetra pharetra massa massa ultricies. At varius vel pharetra vel. Sed felis eget velit aliquet sagittis id consectetur purus ut. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Urna nec tincidunt praesent semper feugiat nibh sed. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Magna ac placerat vestibulum lectus mauris ultrices eros in. Fusce id velit ut tortor pretium viverra suspendisse potenti. Commodo quis imperdiet massa tincidunt. Dignissim suspendisse in est ante in nibh mauris cursus. Aenean euismod elementum nisi quis eleifend quam. Nec ullamcorper sit amet risus nullam eget felis. Mattis vulputate enim nulla aliquet porttitor lacus.']
      }, 
      {
        title: "Where are cheap online toileteries available?",
        viewCount: 23,
        askedBy: 'Valþór',
        answer: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse in est ante in. Blandit cursus risus at ultrices mi tempus. Sed vulputate odio ut enim blandit volutpat. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sed sed risus pretium quam vulputate dignissim. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Eget arcu dictum varius duis at consectetur lorem donec massa. Vitae justo eget magna fermentum iaculis. Vitae auctor eu augue ut lectus arcu bibendum at varius. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Bibendum arcu vitae elementum curabitur vitae nunc sed. Sed turpis tincidunt id aliquet risus feugiat in ante. Mi proin sed libero enim sed faucibus turpis. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Mauris cursus mattis molestie a iaculis at.',
                 'Id faucibus nisl tincidunt eget nullam non. Accumsan in nisl nisi scelerisque eu. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Eget arcu dictum varius duis at consectetur. Diam quam nulla porttitor massa id neque. Tempus urna et pharetra pharetra massa massa ultricies. At varius vel pharetra vel. Sed felis eget velit aliquet sagittis id consectetur purus ut. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Urna nec tincidunt praesent semper feugiat nibh sed. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Magna ac placerat vestibulum lectus mauris ultrices eros in. Fusce id velit ut tortor pretium viverra suspendisse potenti. Commodo quis imperdiet massa tincidunt. Dignissim suspendisse in est ante in nibh mauris cursus. Aenean euismod elementum nisi quis eleifend quam. Nec ullamcorper sit amet risus nullam eget felis. Mattis vulputate enim nulla aliquet porttitor lacus.']
      },
      {
        title: "What is the best hair serum?",
        viewCount: 321,
        askedBy: 'Johny Bravo',
        answer: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse in est ante in. Blandit cursus risus at ultrices mi tempus. Sed vulputate odio ut enim blandit volutpat. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sed sed risus pretium quam vulputate dignissim. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Eget arcu dictum varius duis at consectetur lorem donec massa. Vitae justo eget magna fermentum iaculis. Vitae auctor eu augue ut lectus arcu bibendum at varius. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Bibendum arcu vitae elementum curabitur vitae nunc sed. Sed turpis tincidunt id aliquet risus feugiat in ante. Mi proin sed libero enim sed faucibus turpis. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Mauris cursus mattis molestie a iaculis at.',
                 'Id faucibus nisl tincidunt eget nullam non. Accumsan in nisl nisi scelerisque eu. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Eget arcu dictum varius duis at consectetur. Diam quam nulla porttitor massa id neque. Tempus urna et pharetra pharetra massa massa ultricies. At varius vel pharetra vel. Sed felis eget velit aliquet sagittis id consectetur purus ut. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Urna nec tincidunt praesent semper feugiat nibh sed. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Magna ac placerat vestibulum lectus mauris ultrices eros in. Fusce id velit ut tortor pretium viverra suspendisse potenti. Commodo quis imperdiet massa tincidunt. Dignissim suspendisse in est ante in nibh mauris cursus. Aenean euismod elementum nisi quis eleifend quam. Nec ullamcorper sit amet risus nullam eget felis. Mattis vulputate enim nulla aliquet porttitor lacus.']
      },
      {
        title: "Who advises me Energy Technically?",
        viewCount: 1132,
        askedBy: 'Dexter',
        answer: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse in est ante in. Blandit cursus risus at ultrices mi tempus. Sed vulputate odio ut enim blandit volutpat. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sed sed risus pretium quam vulputate dignissim. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Eget arcu dictum varius duis at consectetur lorem donec massa. Vitae justo eget magna fermentum iaculis. Vitae auctor eu augue ut lectus arcu bibendum at varius. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Bibendum arcu vitae elementum curabitur vitae nunc sed. Sed turpis tincidunt id aliquet risus feugiat in ante. Mi proin sed libero enim sed faucibus turpis. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Mauris cursus mattis molestie a iaculis at.',
                 'Id faucibus nisl tincidunt eget nullam non. Accumsan in nisl nisi scelerisque eu. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Eget arcu dictum varius duis at consectetur. Diam quam nulla porttitor massa id neque. Tempus urna et pharetra pharetra massa massa ultricies. At varius vel pharetra vel. Sed felis eget velit aliquet sagittis id consectetur purus ut. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Urna nec tincidunt praesent semper feugiat nibh sed. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Magna ac placerat vestibulum lectus mauris ultrices eros in. Fusce id velit ut tortor pretium viverra suspendisse potenti. Commodo quis imperdiet massa tincidunt. Dignissim suspendisse in est ante in nibh mauris cursus. Aenean euismod elementum nisi quis eleifend quam. Nec ullamcorper sit amet risus nullam eget felis. Mattis vulputate enim nulla aliquet porttitor lacus.']
      },
    ]
    return (
      <div id="answers">
        {AnswersData.map((answer) => (
          <Answer 
            title={answer.title}
            viewCount={answer.viewCount}
            askedBy={answer.askedBy}
            answer={answer.answer}
          />
        ))}
      </div>
    )
  }
}