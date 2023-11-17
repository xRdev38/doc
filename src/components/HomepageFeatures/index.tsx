import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Framework et Web',
    Svg: require('@site/static/img/undraw_responsive_re_e1nn.svg').default,
    description: (
      <>
        Astronomist est basé sur le framework css Bootstrap. Il est modifiable
          et customisable à souhait avec notre librairie <code>theming</code>
      </>
    ),
  },
  {
    title: 'Concepts responsive',
    Svg: require('@site/static/img/undraw_design_process_re_0dhf.svg').default,
    description: (
      <>
          Les layouts et le grid system de <code>Bootstrap</code> permettent d'avoir un design fluide et adaptive.
      </>
    ),
  },
  {
    title: 'Fonts et icônes',
    Svg: require('@site/static/img/undraw_font_re_efri.svg').default,
    description: (
      <>
        Le bibliothèque <code>Icons</code> permet de créer des font sous forme d'icône avec les svgs associés.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
