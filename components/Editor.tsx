import dynamic from 'next/dynamic'

export const QuillModules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'], // default text formatting

    [{ header: '1' }, { header: '2' }, { header: [1, 2, 3, 4, 5, 6, false] }], // header vlaues

    [{ list: 'ordered' }, { list: 'bullet' }, { script: 'sub' }, { script: 'super' }, 'blockquote', 'code-block'], //lists/superscript/subscript/blockquote/code-block

    [{ align: [] }, { indent: '-1' }, { indent: '+1' }], //alignment and  outdent/indent
    // [{ direction: 'rtl' }], // text direction
    [{ font: [] }, { size: ['small', false, 'large', 'huge'] }], // custom dropdown
    // [{ size: [] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme

    ['link', 'image', 'video'],
    ['clean'], // remove formatting button
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
export const QuillFormats = [
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'code-block',
  'header',
  'font',
  'size',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'direction',
  'align',
  'script',
  'code',
  'color',
  'background',
]

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

export default QuillNoSSRWrapper
