import React from 'react';
import ReactNextPaging from "react-next-paging";
import classnames from 'classnames';
import styles from '../About/About.module.css';
import star from '../../images/Star.png';
import union from '../../images/Union.png';

const buttonStyles = {
  border: "1px solid #ccc",
  background: "#fff",
  fontSize: "1em",
  padding: 10,
  margin: "25px 5px 5px 5px",
  width: 70,
  borderRadius: 20
};


const PaginacionTabla = ({ itemsperpage, nocolumns, pagesspan, items }) => {
  return (
    <ReactNextPaging
      itemsperpage={itemsperpage}
      nocolumns={nocolumns}      
      pagesspan={pagesspan}
      items={items}
    >
      {({
        getBackButtonProps,
        getFastBackButtonProps,
        getFwdButtonProps,
        getFastFwdButtonProps,
        getSelPageButtonProps,
        nopages,
        inipagearray,
        pagesforarray,
        currentpage,
        noitems,
        initialitem,
        lastitem,
        goBackBdisabled,
        goFastBackBdisabled,
        goFwdBdisabled,
        goFastFwdBdisabled
      }) => (
        <tbody>
          {items.slice(initialitem, lastitem).map(repo => {                   
           	return (<tr>
           				<td className={styles.repo}>           				
           					<a href={repo.html_url} className={styles.repoName}>{repo.name}</a>
							<p className={styles.repoDop}>
								{ repo.language != null ? <span> 
											<span className={classnames({ [styles.repoDotYellow]:repo.language==="JavaScript",
																		  [styles.repoDotPurple]:repo.language==="CSS",
																		  [styles.repoDotRed]:repo.language==="HTML", 
																		  [styles.repoDotGreen]: repo.language!=="JavaScript" && repo.language!=="CSS" && repo.language!=="HTML"
															})}></span>								     											
									    	<span className={styles.repoSpan}>{repo.language}</span>
									     </span> 
									: ''								     									
								}
								<img src={star} alt='star icon'  className={styles.repoIcon}/>
									<span className={styles.repoSpan}>{repo.stargazers_count}</span>
								<img src={union} alt='union icon' className={styles.repoIcon}/>
									<span className={styles.repoSpan}>{repo.forks_count}</span>
								<span className={styles.repoSpan}>
									Updated on {repo.updated_at.split("T")[0].split("-").reverse().join(".")}
								</span>								     																     								
							</p>
           				</td>
           			</tr>);
          })}
          {noitems > 0
            ? [
                <tr key={"pagingrow" + 100}>
                  <td colSpan={nocolumns} style={{ textAlign: "center" }}>
                    <button
                      style={buttonStyles}
                      {...getFastBackButtonProps()}
                      disabled={goFastBackBdisabled}
                    >
                      {"first"}
                    </button>
                    <button
                      style={buttonStyles}
                      {...getBackButtonProps()}
                      disabled={goBackBdisabled}
                    >
                      {"<"}
                    </button>
                    {Array.from(
                      { length: pagesforarray },
                      (v, i) => i + inipagearray
                    ).map(page => {
                      return (
                        <button
                          key={page}
                          {...getSelPageButtonProps({ page: page })}
                          disabled={currentpage === page}
                        >
                          {page}
                        </button>
                      );
                    })}
                    <button
                      style={buttonStyles}
                      {...getFwdButtonProps()}
                      disabled={goFwdBdisabled}
                    >
                      {">"}
                    </button>
                    <button
                      style={buttonStyles}
                      {...getFastFwdButtonProps()}
                      disabled={goFastFwdBdisabled}
                    >
                      {"last"}
                    </button>
                  </td>
                </tr>
              ]
            : null}
        </tbody>
      )}
    </ReactNextPaging>
  );
};

export default PaginacionTabla;