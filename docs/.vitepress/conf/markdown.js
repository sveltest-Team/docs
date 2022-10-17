
import mdItCustomAttrs from 'markdown-it-custom-attrs'
export const markdown = {

    toc: { level: [1, 2] },

    config: (md) => {

        md.use(mdItCustomAttrs, 'image', {
            'data-fancybox': "gallery"
        })
    }
}
