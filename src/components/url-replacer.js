import React from "react";
import PropTypes from "prop-types";

const UrlReplacer = (props) => {
    const { experience } = props;
    const { description, replacements, annotations } = experience;

    if ((!replacements.length || replacements.filter(r => !r.label.length || !r.url.length).length)
        && (!annotations.length || annotations.filter(r => !r.label.length || !r.type.length).length)) {
        return <span>{description}</span>;
    }

    const elements = [];
    const replPositions = [];

    const windowOpen = (e, url) => {
        e.stopPropagation();
        const win = window.open(url, '_blank');
        win.focus();
    }

    replacements.filter(r => r.label.length && r.url.length).forEach((el, i) => {
        const start = description.indexOf(el.label);
        replPositions.push({
            start: description.indexOf(el.label),
            end: start + el.label.length,
            url: el.url,
            value: el.label,
            type: "link",
        });
    });

    annotations.filter(r => r.label.length && r.type.length).forEach((el, i) => {
        const start = description.indexOf(el.label);
        replPositions.push({
            start: description.indexOf(el.label),
            end: start + el.label.length,
            value: el.label,
            href: null,
            type: el.type,
        });
    });

    replPositions.sort((a, b) => a.start > b.start).forEach((pos, j, array) => {
        if (j === 0 && pos.start > 0) {
            elements.push({
                start: 0,
                type: 'text',
                value: description.substring(0, pos.start),
            });
        }
        elements.push({
            type: pos.type,
            href: pos.url,
            value: pos.value,
        });
        if (j < replPositions.length - 1) {
            elements.push({
                start: 1,
                type: 'text',
                value: description.substring(pos.end, array[j + 1].start),
            });
        }
        else if (j === replPositions.length - 1) {
            elements.push({
                start: -1,
                type: 'text',
                value: description.substring(pos.end),
            });
        }
    });

    return (
        <p style={{ textAlign: "justify" }}>
            {elements.map((e , i) => {
                return (
                    {
                        link: <a key={`a${i}`} href="#" onClick={p => windowOpen(p, e.href)}>{e.value}</a>,
                        text: <span key={`v${i}`}>{e.value}</span>,
                        bold: <b key={`bv${i}`}>{e.value}</b>,
                        italic: <i key={`iv${i}`}>{e.value}</i>
                    }[e.type]
                )
            })}
        </p>
    )
}
UrlReplacer.propTypes = {
    experience: PropTypes.object.isRequired
}

export default UrlReplacer