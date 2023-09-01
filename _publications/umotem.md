---
title: "UMOTEM: Upper Bounding Method for Optimizing over Tree Ensemble Models"
collection: publications
permalink: /publication/umotem
excerpt: '
[Full paper can be found here](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3972341)
* 2023 - Finalist of the MSOM Student Paper Competition

* 2023 - ORC Best Student Paper Award 

* 2023 - Honorary Mention of the POMS College of SCM Best Student Paper Competition 

* 2022 - Finalist, RMP Jeff McGill Student Paper Award
'
venue: 'under review at Management Science'
date: 2023-01-01
citation: 'Perakis, G., Thayaparan L., Boroujeni S., Panchamgam K., and Schubertruegmer R. (2022). UMOTEM: Upper Bounding Method for Optimizing over Tree Ensemble Models. submitted to Management Science'
---
[Paper Link](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3972341)

Machine learning has become core to forecasting and planning. However, when decision makers are provided with trained and more complex machine learning models, often these models are difficult to then optimize over. When tree-based ensemble models, such as Random Forest or XGBoost, are used in optimization formulations, they require an exponential number of binary decision variables. Optimization problems of this type do not scale well. We propose UMOTEM (Upper Bounding Method for Optimizing over Tree Ensemble Models), an algorithm for optimizing an objective function determined by a tree ensemble model. The algorithm narrows the region of decision variables to an approximate region of optimality by iteratively optimizing using upper bounds as it moves down the trees in the ensemble, at each step only using information available at that depth of the tree. This significantly improves the problem's complexity, with the number of binary variables scaling only linearly, quickly outpacing the exponential growth of the alternative formulations. We show how this method can be used to jointly predict and optimize to save time building sub-optimal branches of the decision trees. We prove an expected optimality gap bound for Random Forest in terms of the forest's in-sample error and leaf separation and show when it is tight. We demonstrate computationally that our algorithm can capture at least 90$\%$ of optimality on a variety of datasets. Finally, we show through work with Oracle Retail, for one of their fashion retailer client, how UMOTEM can increase revenue by 12-13$\%$.

